---
slug: /atrack/as11/features
id: as11-features
sidebar_label: Features
title: ATrack - AS11 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the ATrack AS11 rugged LTE GPS tracker and its Plaspy compatibility for long term asset tracking
keywords:
  - ATrack AS11
  - AS11 features
  - AS11 GPS tracker
  - ATrack AS11 features
  - AS11 Plaspy compatibility
  - rugged GPS tracker
  - LTE Cat M1 tracker
  - LTE Cat1 tracker
  - BLE asset tracker
  - asset tracking AS11
---

# ATrack - AS11 Features

This page provides a public feature overview of the ATrack AS11 as used with Plaspy. It summarizes the AS11's practical capabilities, how those capabilities map into Plaspy for tracking and monitoring, and what to consider when planning deployments with Plaspy as the backend platform.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, and specific installation choices. Where relevant, this page references the AS11 feature set in general terms; for device specific specifications and the latest firmware details consult the manufacturer's official documentation.

## Feature Overview

The ATrack AS11 is a rugged LTE GPS tracker designed for long term asset management in harsh environments and ships with compatibility for Plaspy out of the box. It combines industrial protection, long battery operation, broad cellular options, and onboard connectivity to deliver location and telemetry suitable for remote assets and equipment.

- Rugged design and environmental resilience for outdoor and industrial deployments.
- LTE connectivity in Cat.1 and Cat.M1 variants for broad carrier support and low power operation.
- GNSS position fixes with typical meter level accuracy for reliable location reporting.
- Local sensor and I O support including BLE for accessory sensors and multiple configurable inputs and outputs.
- Long-life rechargeable battery and large internal logging capacity to support intermittent connectivity and deferred uploads.

## Core Features of ATrack - AS11

- Rugged enclosure with IP68 rating and MIL STD 810H compliance for water, dust, shock, and vibration resistance.
- Cellular variants supporting 4G LTE Cat.1 and Cat.M1 to match different carrier and deployment needs.
- Embedded GNSS with GPS and GLONASS, SBAS support, and typical 2.5 m CEP positioning accuracy.
- Bluetooth Low Energy v4.2 for pairing local sensors and accessory devices.
- Extensive I O and interfaces including ignition input, configurable digital inputs and outputs, analog input (0–40 V), RS232 serial, and 1 Wire for iButton or temperature sensors.
- Large internal flash storage and queued logging with capacity for many thousands of logs and queued messages to support deferred transmission.
- Remote management support including FOTA and device management features for large scale rollouts.
- Optional external GNSS antenna support for deployments with challenging reception.

## How These Features Work with Plaspy

Plaspy receives AS11 telemetry and events to present real time location, historical tracks, and sensor data in dashboards and alerts. The AS11 can send data to Plaspy using standard transport options and Plaspy automatically detects compatible tracker protocols for easier onboarding.

- Real time location updates and historical tracks appear in Plaspy dashboards when GNSS fixes are sent from the device.
- I O and sensor events such as ignition changes, digital input triggers, and analog readings are available to drive alerts and operational rules.
- BLE sensor data and connected accessory readings can be forwarded to Plaspy as part of telemetry streams when provided by the device.
- Offline logging and queued messages stored by the AS11 are uploaded to Plaspy when connectivity is restored, preserving continuity of records.
- Devices can be configured to report to Plaspy endpoints such as d.plaspy.com and Plaspy detects the tracker protocol to simplify setup.

## Typical Use Cases

- Long duration tracking of shipping containers and remote assets where maintenance access is limited.
- Monitoring of trailers, heavy equipment, and unpowered assets for location and movement events.
- Anti theft and recovery workflows using real time tracking, event reporting, and configurable outputs.
- Asset telemetry and sensor integration using analog inputs, BLE sensors, and queued logging for later upload.
- Remote equipment monitoring in intermittent network environments where offline logging is critical.
- Fleet oversight for mixed powered and non powered assets requiring durable hardware and long battery life.

## Feature Availability Notes

- Firmware and hardware revisions influence available features and exact behavior; feature lists can change between releases.
- Cellular band support and hardware variants differ by region and carrier certification, so validate the variant before large scale purchases.
- Battery life depends heavily on reporting interval, network conditions, and enabled peripherals; quoted durations are indicative only.
- Optional external antenna functionality and accessory interfaces may be present on some variants but not all; confirm with the vendor.
- Logged message capacities and specific I O configurations depend on device firmware and provisioning.

## Why Use Plaspy with These Features

Using the AS11 with Plaspy gives organizations a reliable way to collect location and telemetry from rugged assets and present that data for operational decision making. The combination of durable hardware, queued logging for intermittent connectivity, flexible I O, and BLE sensor support makes the AS11 well suited to remote asset tracking, anti theft workflows, and telemetry integrations that feed Plaspy dashboards and alerts.

To learn more about how Plaspy can support deployments with devices like the ATrack AS11 visit https://www.plaspy.com. For the most current and detailed device specifications, firmware behavior, and manufacturer documentation please verify details with ATrack at https://www.atrack.com.tw/.
