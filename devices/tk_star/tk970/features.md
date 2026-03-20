---
slug: /tk_star/tk970/features
id: tk970-features
sidebar_label: Features
title: TK-Star - TK970 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the TK-Star TK970 GPS tracker and how it works with Plaspy for vehicle tracking and fleet monitoring
keywords:
  - TK-Star TK970 features
  - TK970 GPS tracker
  - TK970 Plaspy compatibility
  - TK970 vehicle tracker
  - motorcycle GPS tracker TK970
  - 4G GPS tracker TK970
  - NB IoT TK970
  - relay based engine cut off TK970
  - TK970 geo fence and alerts
  - TK970 historical route playback
---

# TK-Star - TK970 Features

This page provides a public feature overview of the TK-Star TK970 and explains how its capabilities can be used with Plaspy for real time tracking, alerts, and historical reporting. It is written to describe practical, non sensitive features and expected behaviors when the TK970 is integrated with the Plaspy platform.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, and installation method. Always verify device specific capabilities and firmware behavior with the manufacturer's documentation when planning deployments or advanced integrations.

## Feature Overview

The TK970 is a compact 4G vehicle tracker designed for motorcycles, private cars, rental fleets and mixed vehicle assets. It combines multi constellation GNSS, extended cellular options, on device security controls and event reporting to support tracking, anti theft response, and fleet oversight when connected to Plaspy.

- Multi mode positioning with GPS, BeiDou and GLONASS plus network fallback for improved indoor and urban coverage.
- Cellular connectivity across 4G LTE, NB IoT, Cat M1 and 2G variants to suit regional deployments.
- Security and remote control features including SOS, relay based remote engine or oil cut off, vibration alarm, and built in microphone for voice monitoring.
- Compact form factor and wide operating voltage range for flexible installation on motorcycles and vehicles.
- On device event reporting such as geo fence, over speed, movement and vibration alerts with server side route history and playback.
- Small internal backup battery that provides short duration standby when external power is lost.

## Core Features of TK-Star - TK970

- Multi constellation GNSS positioning supporting GPS, BeiDou BD and GLONASS for consistent location fixes.
- Multiple cellular transport options including 4G LTE regional variants plus NB IoT, Cat M1 and 2G fallback.
- Relay output for remote engine or oil cut off and resume to support anti theft actions and immobilization workflows.
- SOS emergency button and vibration sensor for tamper and movement detection with event reporting.
- Built in microphone enabling remote voice monitoring where supported by local regulations and device configuration.
- On device alarms and telematics events including geo fence breaches, over speed notifications and movement alerts.
- Internal backup battery (~180 mAh) to provide limited standby time when external power is interrupted.
- Compact dimensions and extended operating voltage suitable for motorcycles, cars and mixed vehicle assets.

## How These Features Work with Plaspy

When the TK970 is installed and configured to report to Plaspy, position fixes and event messages stream to the Plaspy platform for visualization, alerting and historical storage. Plaspy automatically detects many tracker protocols and ingests location and event data into fleet dashboards and reports.

- Real time location updates and map visualization in Plaspy based on GNSS coordinates and network fallback positions.
- Event routing for SOS, vibration alarms, geo fence breaches and over speed notifications so operators receive timely alerts.
- Remote control actions such as relay based engine or oil cut off and resume can be issued and recorded through Plaspy interfaces where enabled.
- Historical route playback and consolidated reports stored on the Plaspy server for review and compliance.
- Devices may be configured to report to Plaspy using UDP or TCP to the Plaspy server domain and Plaspy will detect the device protocol automatically.

## Typical Use Cases

- Fleet tracking for cars, vans and mixed vehicle fleets with real time monitoring and route history for operations teams.
- Motorcycle and scooter protection where compact installation and vibration alarms improve anti theft response.
- Rental vehicle monitoring with movement alerts and historical playback to support billing and incident investigation.
- Remote asset protection in urban and semi remote environments where LBS and Wi Fi fallback improve coverage.
- Rapid response and emergency workflows using SOS notifications routed through Plaspy to operations staff.
- Consolidated telemetry and event dashboards for mixed fleets combining TK970 data with other device streams.

## Feature Availability Notes

- Feature sets can vary by firmware and hardware revision; not all regional variants will include the same bands or capabilities.
- Some features such as voice monitoring and remote engine control may require local configuration, permissions and regulatory compliance.
- Network fallback methods and the quality of LBS or Wi Fi assisted positioning depend on local cellular and network environments.
- Power and standby behavior depends on installation wiring and battery condition; internal backup battery provides limited standby only.
- Always consult the manufacturer documentation for the specific unit you have, and verify firmware release notes for recent changes.

## Why Use Plaspy with These Features

Using the TK-Star TK970 with Plaspy lets organizations centralize location and event data from compact, broadly capable trackers into a single monitoring and reporting platform. Plaspy takes the TK970 telemetry and presents it as live maps, alerting rules and historical playback so operations teams can act on location information and event signals quickly.

To learn more about Plaspy and how it supports devices like the TK970 visit https://www.plaspy.com. For the latest device specific technical details, firmware notes and manufacturer guidance always check the official TK Star website at https://www.tk-star.com/ since device features and firmware behavior can change over time.
