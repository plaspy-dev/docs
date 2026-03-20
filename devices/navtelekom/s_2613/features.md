---
slug: /navtelekom/s_2613/features
id: s_2613-features
sidebar_label: Features
title: Navtelekom - СИГНАЛ S-2613 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for Navtelekom СИГНАЛ S 2613 and how it works with Plaspy for vehicle and asset tracking
keywords:
  - Navtelekom СИГНАЛ S-2613
  - SIGNAL S-2613 features
  - Navtelekom GPS tracker features
  - S-2613 Plaspy compatibility
  - GLONASS GPS tracker
  - 2G GSM tracker
  - RS485 tracker
  - Bluetooth 4.0 tracker
  - backup battery tracker
  - vehicle asset tracking
---

# Navtelekom - СИГНАЛ S-2613 Features

This page provides a public feature overview of the Navtelekom СИГНАЛ S-2613 as it relates to use with Plaspy. It summarizes the tracker capabilities that are relevant for fleet and asset monitoring in Plaspy, and explains how the device’s main functions are reflected in Plaspy dashboards, alerts, and reports.

Exact feature availability and behavior can vary with firmware version, hardware revision, regional device variants, installation method, and manufacturer implementation. For device level specifics such as supported frequencies, firmware capabilities, and configuration tools consult the official Navtelekom documentation.

## Feature Overview

The СИГНАЛ S-2613 is an entry level professional tracker offering core telematics needed for reliable vehicle and asset monitoring. Its combination of GNSS positioning, GSM connectivity, robust power handling and flexible I O makes it well suited for continuous tracking, event reporting and simple remote control workflows when integrated with Plaspy.

- Stable GLONASS and GPS positioning using an external GNSS antenna for reliable location updates.
- 2G GSM modem with single SIM support for cellular data and network based communication.
- Four digital inputs, one analog input, four control outputs and RS 485 for external sensor and controller integration.
- Bluetooth 4.0 plus a hands free speakerphone for local sensor pairing and on vehicle voice interaction.
- Power input protection up to 200 V and an integrated 800 mAh backup battery to preserve basic operation during power interruptions.

## Core Features of Navtelekom - СИГНАЛ S-2613

- GLONASS and GPS positioning for real time location reporting.
- 2G GSM modem with external antenna support for cellular connectivity.
- Multiple discrete inputs and one analog input for event and sensor capture.
- Four driver or control outputs usable for external device control.
- RS 485 serial interface for integration with on board controllers and telemetry devices.
- Bluetooth 4.0 for local peripheral pairing and hands free audio support.
- Integrated 800 mAh Li Po backup battery and power input protection designed for automotive electrical environments.
- Compact rugged form factor designed for vehicle and asset installation.

## How These Features Work with Plaspy

Plaspy ingests the S 2613 telemetry and position streams to provide visibility across live maps, history playback, and event based workflows. Plaspy automatically detects compatible tracker protocols and accepts device data into fleet dashboards for monitoring and reporting.

- Real time GNSS coordinates and timestamps appear on Plaspy maps and in live tracking panels.
- Discrete digital input events are recorded as alarms or status changes that can trigger notifications and rules.
- Analog input readings and RS 485 telemetry can be forwarded into Plaspy as device telemetry for reporting and trend analysis when configured.
- Output states and supported remote control actions are visible in the device details page and can be used in Plaspy automation where device firmware and installation allow.
- Device connectivity and configuration are straightforward to route into Plaspy using the common Plaspy server settings such as the d.plaspy.com endpoint and the shared data port that Plaspy accepts for tracker connections; the device may send data over UDP or TCP and Plaspy will detect the protocol automatically.

## Typical Use Cases

- Fleet tracking and route history for light and medium vehicle fleets requiring continuous location visibility.
- Anti theft monitoring with backup battery support to preserve location reporting during main power loss.
- Remote control workflows using outputs for alarm responses and controlled interventions where permitted.
- Sensor integration for operational telemetry via RS 485 and the analog input for third party sensors.
- On vehicle voice alerts and local sensor pairing with Bluetooth and hands free audio.
- Cargo and asset monitoring where robust power handling and external antennas improve reception and continuity.

## Feature Availability Notes

- Firmware differences can change available reports, event names, and supported remote commands. Check the device firmware notes when planning deployments.
- Hardware revisions or regional variants may differ in cellular band support and physical interfaces. Verify the device passport for your unit.
- Installation practices affect sensor wiring and the behavior of inputs and outputs. Professional installation is recommended for safety critical control functions.
- RS 485 and analog sensor support require compatible external devices and correct configuration in both the tracker and Plaspy.
- Because the S 2613 uses a 2G modem, confirm cellular coverage in your operating regions and consider alternative models if newer cellular technologies are required.

## Why Use Plaspy with These Features

Using the Navtelekom СИГНАЛ S 2613 with Plaspy gives operations teams a straightforward path from device telemetry to actionable fleet insights. Plaspy collects GNSS position data, input events and telemetry streams to present live location, historical playback and rule based alerts that support routine monitoring and incident response.

To learn more about how Plaspy can work with Navtelekom trackers visit https://www.plaspy.com. For the most current device specifications, firmware notes and manufacturer guidance verify details at the Navtelekom website https://www.navtelecom.ru/ as device features and firmware behavior can change over time.
