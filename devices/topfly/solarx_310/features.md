---
slug: /topfly/solarx_310/features
id: solarx_310-features
sidebar_label: Features
title: TopFly - SolarX 310 Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for the TopFly SolarX 310 and how it works with Plaspy for tracking buffering BLE sensors and solar power
keywords:
  - TopFly SolarX 310
  - SolarX 310 features
  - TopFly GPS tracker
  - Solar powered GPS tracker
  - SolarX 310 BLE sensors
  - SolarX 310 GNSS accuracy
  - SolarX 310 buffer storage
  - Plaspy compatible tracker
  - SolarX 310 anti theft
  - SolarX 310 fleet tracking
---

# TopFly - SolarX 310 Features

This page covers the public feature context for using the TopFly SolarX 310 GPS tracker with Plaspy. It describes the SolarX 310 capabilities that are relevant to monitoring, alerting, and historical reporting inside Plaspy without getting into private configuration details.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, accessory choice, and the manufacturer implementation. For device specific parameters and the latest technical details, consult the official TopFly documentation and firmware release notes.

## Feature Overview

The SolarX 310 is a rugged, solar assisted GPS tracker designed for long term outdoor deployments on containers, trailers, trucks and other high value mobile assets. When used with Plaspy it provides continuous location and sensor feeds, buffered playback after connectivity loss, and configurable alarms for anti theft and environmental monitoring.

- Solar assisted power with onboard rechargeable Li polymer battery to support long duration field use.
- Real time tracking capable of updates as frequent as 3 seconds for responsive location visibility.
- Multi constellation GNSS receiver with sub 2 meter horizontal accuracy for precise position reporting.
- BLE 5.3 support for external temperature and door sensors to combine environmental telemetry with location.
- Large offline buffer that stores tens of thousands of points for reliable track reconstruction after network outages.

## Core Features of TopFly - SolarX 310

- Solar charging and integrated rechargeable battery for extended deployments with less maintenance.
- High frequency reporting support with configurable intervals down to approximately 3 seconds for close to real time tracking.
- Multi constellation GNSS coverage for improved positioning accuracy and faster fix times.
- BLE 5.3 compatibility to pair with TopFly sensor accessories such as temperature and door sensors.
- IP67 rated rugged enclosure suitable for outdoor exposure and asset mounting.
- Large internal buffer capable of storing up to 60,000 location records when network connectivity is unavailable.
- Tamper and removal detection via an integrated hall switch plus configurable alarm types and geofence regions.
- Multiple communications options including TCP, UDP, MQTT and SMS with common security options available.

## How These Features Work with Plaspy

Plaspy ingests the SolarX 310 telemetry and location streams to present live dashboards, generate alerts, and retain historical tracks for analysis. Buffered points are forwarded to Plaspy when connectivity returns so tracks remain continuous in the platform.

- Live and periodic position updates appear in Plaspy maps and device timelines according to the device reporting schedule.
- Buffered historical playback provides reconstructed tracks in Plaspy using stored points transmitted after offline periods.
- Tamper and removal alerts from the hall switch surface as real time events in Plaspy for immediate notification and automation.
- BLE sensor telemetry such as temperature and door status can be surfaced alongside location within Plaspy reports and alert rules when supported by the paired accessory.
- Configurable alarms and geofence events from the device are sent to Plaspy for rule based notifications and downstream workflows.
- Plaspy automatically detects common tracker protocols and ingests TCP, UDP, MQTT and SMS messages to simplify device onboarding.

## Typical Use Cases

- Fleet visibility for trailers and trucks where real time position and route history are required.
- Remote container tracking where solar power and IP67 ruggedness keep devices online in exposed environments.
- Anti theft monitoring using removal detection, geofencing and immediate alerts for unauthorized movement.
- Environmental monitoring of sensitive cargo using BLE temperature and humidity sensors paired to the tracker.
- Long duration asset monitoring where large offline buffers preserve location history during network outages.
- Asset lifecycle tracking for leased or high value equipment that requires low maintenance field operation.

## Feature Availability Notes

- Firmware and hardware revisions can change supported reporting intervals, security options, and accessory compatibility.
- Some accessories and BLE sensors require matching TopFly sensor models and may not be universally compatible.
- Regional cellular band variants and carrier approvals affect network availability and should be confirmed for your deployment area.
- Installation type and mounting method influence solar charge performance and overall battery longevity.
- Confirm alarm types, geofence limits, and configuration options with the official TopFly product documentation for the exact device you have.

## Why Use Plaspy with These Features

Combining the SolarX 310 with Plaspy gives organizations a way to consolidate location, sensor telemetry, and event alerts into a single operational view. Plaspy’s dashboards and historical reports make it easier to act on removal alerts, temperature thresholds, or gap recovery from buffered tracks, helping teams maintain visibility over widely dispersed assets.

To learn more about how Plaspy can work with the TopFly SolarX 310 visit https://www.plaspy.com. For the most current device specifications, firmware behavior and accessory compatibility please verify details with the manufacturer at https://www.topflytech.com/.
