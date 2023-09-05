import React, { useEffect, useState } from "react";
import happy from "../assets/cat_happy.gif";
import sad from "../assets/cat_sad.gif";
import neutral from "../assets/cat_neutral.gif";
import dead from "../assets/cat_dead.gif";

// entities ----------------------------
const STATS = {
  HUNGER: "hunger",
  SLEEPINESS: "sleepiness",
  BOREDOM: "boredom",
};

const MOODS = {
  HAPPY: "happy",
  NEUTRAL: "neutral",
  SAD: "sad",
  DEAD: "dead",
};

// constants ----------------------------

const INITIAL_STATS = {
  [STATS.HUNGER]: 0,
  [STATS.SLEEPINESS]: 0,
  [STATS.BOREDOM]: 0,
};

const MAX_STAT_VALUE = 100;
const MIN_STAT_VALUE = 0;
const STAT_VALUE_INCREMENT_RANGE = [0, 5];
const INITIAL_MOOD = MOODS.NEUTRAL;

const MOODS_IMAGES = {
  [MOODS.HAPPY]: happy,
  [MOODS.NEUTRAL]: neutral,
  [MOODS.SAD]: sad,
  [MOODS.DEAD]: dead,
};

// utils ----------------------------

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export const sumObjectValues = (obj) =>
  Object.values(obj).reduce((acc, v) => acc + v, 0);

// components ----------------------------

const MascotaVirtual = () => {
  const [stats, setStats] = useState(INITIAL_STATS);
  const [cooldowns, setCooldowns] = useState({
    [STATS.HUNGER]: 0,
    [STATS.SLEEPINESS]: 0,
    [STATS.BOREDOM]: 0,
  });

  const _updateStats = (stats) => {
    setStats((prevStats) => {
      const newStats = { ...prevStats };

      Object.entries(stats).forEach(([stat, value]) => {
        newStats[stat] = clamp(
          prevStats[stat] + value,
          MIN_STAT_VALUE,
          MAX_STAT_VALUE
        );
      });

      return newStats;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomValue = () => random(...STAT_VALUE_INCREMENT_RANGE);

      _updateStats({
        [STATS.HUNGER]: randomValue(),
        [STATS.SLEEPINESS]: randomValue(),
        [STATS.BOREDOM]: randomValue(),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleCooldown = (stat, sec) => {
    setCooldowns((prevCooldowns) => ({
      ...prevCooldowns,
      [stat]: sec,
    }));

    setTimeout(() => {
      setCooldowns((prevCooldowns) => ({
        ...prevCooldowns,
        [stat]: 0,
      }));
    }, sec * 1000);
  };

  const handleFeed = () => {
    handleCooldown(STATS.HUNGER, 5);
    _updateStats({
      [STATS.HUNGER]: -80,
      [STATS.SLEEPINESS]: 10,
      [STATS.BOREDOM]: 0,
    });
  };

  const handleSleep = () => {
    handleCooldown(STATS.SLEEPINESS, 10);
    _updateStats({
      [STATS.HUNGER]: 30,
      [STATS.SLEEPINESS]: -100,
      [STATS.BOREDOM]: 50,
    });
  };

  const handlePlay = () => {
    handleCooldown(STATS.BOREDOM, 10);
    _updateStats({
      [STATS.HUNGER]: 20,
      [STATS.SLEEPINESS]: 50,
      [STATS.BOREDOM]: -50,
    });
  };

  const getMood = () => {
    const totalPoints = sumObjectValues(stats);

    const RULES = {
      [MOODS.HAPPY]: totalPoints < 50,
      [MOODS.NEUTRAL]: totalPoints >= 50 && totalPoints < 150,
      [MOODS.SAD]: totalPoints >= 150 && totalPoints < 300,
      [MOODS.DEAD]: totalPoints >= 300,
    };

    return Object.entries(RULES).find(([mood, value]) => value)[0];
  };

  const mood = getMood();

  const formatStat = (stat) => {
    const value = stats[stat];

    if (value < 20) return "😀";
    if (value >= 20 && value < 50) return "😐";
    if (value >= 50 && value < 100) return "😞";
    if (value >= 100) return "💀";
  };

  return (
    <div>
      <h1>Mascota Virtual</h1>
      <div>
        <p>STATS</p>
        <p>
          Hambre: {stats[STATS.HUNGER]} - {formatStat(STATS.HUNGER)}
        </p>
        <p>
          Aburrimiento: {stats[STATS.BOREDOM]} -{formatStat(STATS.BOREDOM)}
        </p>
        <p>
          Sueño: {stats[STATS.SLEEPINESS]} -{formatStat(STATS.SLEEPINESS)}
        </p>
      </div>
      <div>
        <p>MOOD</p>
        <p>{mood}</p>
      </div>
      <img src={MOODS_IMAGES[mood]} />

      <div>
        <button disabled={cooldowns[STATS.HUNGER] > 0} onClick={handleFeed}>
          Alimentar
        </button>
        <button
          disabled={cooldowns[STATS.SLEEPINESS] > 0}
          onClick={handleSleep}
        >
          Dormir
        </button>
        <button disabled={cooldowns[STATS.BOREDOM] > 0} onClick={handlePlay}>
          Jugar
        </button>
      </div>
    </div>
  );
};

export default MascotaVirtual;
