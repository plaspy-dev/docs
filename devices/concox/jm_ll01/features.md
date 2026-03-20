---
slug: /concox/jm_ll01/features
id: jm_ll01-features
sidebar_label: Features
title: Concox - JM-LL01 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Concox JM-LL01 asset GNSS tracker and how it integrates with Plaspy for long term tracking and telemetry
keywords:
  - Concox JM-LL01
  - Concox JM-LL01 features
  - Concox JM-LL01 GPS tracker
  - JM-LL01 Plaspy compatibility
  - asset tracker long battery
  - LTE Cat M1 NB-IoT tracker
  - GPS BDS tracker
  - tamper detection tracker
  - BLE 4.2 configuration
  - on device logging
---

# Concox - JM-LL01 Features

This page provides a public overview of the Concox JM-LL01 feature set as it relates to Plaspy. It describes the tracker’s practical capabilities, the ways those capabilities appear inside Plaspy, and the typical operational scenarios where the JM-LL01 is commonly deployed. The content is intended for general planning and discovery rather than device-specific configuration instructions.

Exact feature availability for any individual unit depends on firmware version, hardware revision, regional model variant, installation method, and how the manufacturer implements specific functions. Users should consult official Concox documentation and release notes for model-specific and firmware-specific details before deployment.

## Feature Overview

The JM-LL01 is a compact, rugged GNSS asset tracker optimized for long-term, low-power deployments and fleet or asset management. It combines multi-network cellular connectivity, multi-source positioning, extended battery capacity, and basic anti-tamper/monitoring sensors to deliver reliable location and event telemetry for unattended assets.

- Long-life 10,000 mAh rechargeable battery and configurable power profiles for extended unattended operation.
- LTE Cat M1 and NB-IoT connectivity with GSM 2G fallback for broad coverage and low-power telemetry.
- Multi-source GNSS positioning using GPS and BDS with LBS fallback to maintain location when satellite signals are weak.
- On-device logging to preserve location history while out of network coverage, with uploads when connectivity is restored.
- Tamper detection and motion sensing to support anti-theft alerts and movement notifications.
- BLE 4.2 for local configuration and optional local setup workflows.

## Core Features of Concox - JM-LL01

- IoT-optimized cellular connectivity including LTE Cat M1 and NB-IoT with GSM 2G fallback for continuity.
- Multi-source GNSS positioning combining GPS and BDS with LBS fallback for improved location availability.
- High-capacity 10,000 mAh rechargeable battery with configurable operating modes to balance reporting frequency and battery life.
- Tamper detection via light sensor and movement monitoring using a 3-axis accelerometer for theft and disturbance alerts.
- On-device memory for offline logging of GPS entries to preserve tracks during connectivity outages.
- BLE 4.2 radio for local configuration, commissioning, and optional pairing with supported Bluetooth peripherals.
- Rugged IP65 enclosure with magnetic or strap mounting options for quick and secure installation on assets.
- Configurable reporting and power profiles to support a wide range of long-term asset monitoring scenarios.

## How These Features Work with Plaspy

Plaspy ingests location and event telemetry from compatible Concox JM-LL01 units and presents that information through real-time maps, alert rules, and historical reports. The tracker’s connectivity, sensors, and logging work together to provide continuous visibility and event-driven notifications in Plaspy even when network conditions vary.

- Real-time location updates and telemetry appear on Plaspy maps and dashboards for situational awareness.
- Tamper, movement, vibration, and other event notifications are forwarded into Plaspy alert workflows for timely action.
- On-device logged positions are uploaded to Plaspy when connectivity returns, preserving historical track data for reporting.
- Battery status and configured power mode information can be surfaced in Plaspy to support maintenance planning and battery lifecycle monitoring.
- BLE-based local configuration can be used during installation to set device parameters before or while registering the device in Plaspy.

## Typical Use Cases

- Long-term monitoring of containers, trailers, and rental equipment where extended battery life and unattended operation are priorities.
- Fleet and logistics tracking to provide route visibility and movement alerts for distributed assets.
- Anti-theft and security monitoring using tamper detection, movement alerts, and timely notifications routed into Plaspy.
- Remote or intermittent-coverage deployments where on-device logging preserves location history until uploads are possible.
- Temporary or redeployable installations using magnetic base or strap mounts for quick attachment and removal.
- Asset lifecycle and redeployment tracking for high-value equipment moved between sites.

## Feature Availability Notes

- Feature presence and behavior depend on the device firmware version and hardware revision; capabilities can change across firmware updates.
- Regional or carrier variants may differ in supported cellular bands, certifications, or network fallback behavior.
- Some features such as BLE peripheral pairing, specific alert thresholds, and runtime estimates depend on configuration and installation.
- On-device logging capacity and retention depend on configured reporting intervals and firmware handling of queued data.
- Always verify the exact capabilities of a given unit and firmware build against official Concox documentation.

## Why Use Plaspy with These Features

Pairing the Concox JM-LL01 with Plaspy centralizes location, event, and status data into a single platform that supports monitoring, reporting, and alerting for distributed assets. Plaspy’s visualization, rule engine, and reporting tools help turn the JM-LL01’s GNSS positions, on-device logs, and sensor events into actionable insight for operations, security, and maintenance teams.

Learn more about Plaspy and how it supports trackers like the JM-LL01 at https://www.plaspy.com. For the most current device specifications, firmware behavior, and manufacturer guidance, please consult Concox at https://www.iconcox.com/ to verify device-specific details.
