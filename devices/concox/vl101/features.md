---
slug: /concox/vl101/features
id: vl101-features
sidebar_label: Features
title: Concox - VL101 Features
sidebar_class_name: menu_item_tracker
description: Accurate multi GNSS and INS vehicle tracking compatible with Plaspy for fleet visibility and remote control
keywords:
  - Concox VL101
  - Concox VL101 features
  - VL101 GPS tracker
  - Concox VL101 Plaspy
  - VL101 4G tracker
  - dual frequency GPS
  - INS aided tracking
  - IP66 vehicle tracker
  - ignition detection
  - remote engine cut off
---

# Concox - VL101 Features

This page describes the public feature context for using the Concox VL101 tracker with Plaspy. It summarizes the practical capabilities you can expect when the VL101 reports into Plaspy, and explains how those capabilities translate into visibility and operational monitoring on the Plaspy platform.

Exact feature availability and behavior can vary by firmware version, hardware revision, local cellular variants, and how the device is installed. The descriptions here are based on the publicly available model information for the VL101 series and are intended to be accurate while remaining high level and non sensitive.

## Feature Overview

The Concox VL101 is a 4G vehicle tracker designed for accurate, real time positioning and reliable connectivity. It combines multi GNSS reception with inertial assistance and a rugged enclosure to provide stable tracking for vehicles under varying conditions.

- Multi constellation GNSS support including GPS BDS GLONASS and Galileo for improved position availability
- Dual frequency GPS processing to reduce interference and improve accuracy in challenging environments
- INS aided tracking to maintain position estimates when GPS signals are weak or temporarily unavailable
- 4G LTE connectivity with GSM fallback to sustain communication across different network conditions
- IP66 rated enclosure for dust and water resistance suitable for rooftop installation

## Core Features of Concox - VL101

- 4G LTE communications with GSM fallback for resilient cellular reporting
- Multi GNSS reception including GPS BDS GLONASS and Galileo combined with dual frequency GPS
- Inertial navigation system assisted tracking to support location continuity in poor GPS coverage
- Real time location reporting for single vehicle and fleet monitoring scenarios
- IP66 dust and water resistance for outdoor and rooftop mounting
- Driving behavior analysis features to detect and categorize driving events
- Ignition detection to report vehicle on off state and usage times
- Remote engine cut off capability when used with an appropriate relay and installer configuration

## How These Features Work with Plaspy

Plaspy receives and normalizes the data reported by the VL101 so you can view locations, events, and device status centrally. Plaspy automatically detects common tracker protocols and presents device reports in the platform without requiring manual protocol selection.

- Real time location and position fixes appear on Plaspy maps for live tracking and playback
- Historical tracks and position timestamps enable route review and auditing for individual vehicles
- Ignition on off events and remote engine cut off actions are surfaced as events and can be used to trigger alerts or workflows
- Driving behavior events reported by the device can be shown in Plaspy for safety reviews and driver coaching
- Device connectivity and fallback behavior are visible in status indicators so you can monitor cellular reachability and reporting cadence
- Plaspy accepts device reports to its server domain and will detect the tracker protocol to streamline setup and reporting

## Typical Use Cases

- Fleet location tracking and route monitoring for commercial vehicles
- Driver behavior monitoring and coaching programs using driving event reports
- Remote immobilization and recovery workflows that utilize ignition detection and engine cut off
- Vehicles operating in areas with variable GNSS visibility where INS aided tracking improves continuity
- Outdoor rooftop installations that benefit from IP66 protection and improved signal reception

## Feature Availability Notes

- Firmware and hardware revisions can change feature sets and event behavior for the VL101 family
- Regional cellular band support may affect 4G LTE connectivity and fallback behavior
- INS performance and driving behavior analysis depend on device configuration and calibration
- Remote engine cut off requires proper wiring, an installed relay, and may be restricted by local regulations or installer configuration
- RS232 and TTL interfaces are available on some variants for accessory integration but exact pinouts and supported peripherals vary by model and revision

## Why Use Plaspy with These Features

Using the Concox VL101 with Plaspy brings vehicle level positioning and event data into a single fleet management environment. Plaspy consolidates real time location, historical tracks, and device events so operations teams can monitor vehicles, respond to incidents, and analyze usage patterns without handling raw device telemetry.

If you would like to learn more about how Plaspy works with trackers like the Concox VL101, visit https://www.plaspy.com. For the latest device specific technical details, firmware notes, and manufacturer guidance please verify current information on the official Concox website https://www.iconcox.com/ .
