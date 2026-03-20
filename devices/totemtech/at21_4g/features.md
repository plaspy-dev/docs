---
slug: /totemtech/at21_4g/features
id: at21_4g-features
sidebar_label: Features
title: Totemtech - AT21-4G Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the Totemtech AT21-4G solar 4G GPS tracker and how it integrates with Plaspy for remote asset monitoring
keywords:
  - Totemtech AT21-4G
  - Totemtech AT21-4G features
  - Totemtech AT21-4G GPS tracker
  - AT21-4G solar tracker
  - AT21-4G Plaspy compatibility
  - Plaspy compatible trackers
  - solar GPS tracker
  - remote asset tracker
  - trailer container tracking
  - LTE asset tracker
---

# Totemtech - AT21-4G Features

This page provides a public, feature-focused summary of the Totemtech AT21-4G and how its capabilities are used with Plaspy for remote asset tracking and fleet oversight. It highlights the main functions you can expect when the AT21-4G is deployed and reporting into Plaspy, focusing on practical operational value rather than low-level configuration details.

Exact feature availability and behavior can vary by device firmware, hardware revision, optional accessories, installation method, and manufacturer implementation. Use this page as a high-level guide for Plaspy compatibility and feature intent, and consult the manufacturer documentation for the most current and device-specific technical details.

## Feature Overview

The AT21-4G is a rugged, solar charged 4G GPS tracker designed for long deployments on trailers, containers, rail assets, mining equipment and other remote or stationary assets. It balances durable enclosure design and large battery capacity with configurable reporting and sensor inputs to support long-term unattended operation.

- Integrated solar panel and a 10,000 mAh Li polymer battery for extended autonomous operation without wired power.
- Multi GNSS positioning for improved fix times and positional accuracy suitable for asset tracking and historical playback.
- LTE Cat 1 cellular connectivity with automatic fallback to older cellular modes, and flexible data transport via UDP, TCP or SMS.
- Rugged IP67 enclosure with optional removable magnets and simple installation options for exposed outdoor mounting.
- Configurable I/O and sensor support including 1-wire temperature sensors, analog input and digital I/O for telemetry and event monitoring.

## Core Features of Totemtech - AT21-4G

- Solar charging plus large internal battery for long deployments where DC power is not available.
- Multi GNSS support for GPS, BeiDou, GLONASS, Galileo and related augmentation systems to improve positioning.
- Cellular data transport over LTE Cat 1 with fallback to WCDMA and EDGE/GPRS as configured by the manufacturer.
- Multiple reporting transports supported by the device: UDP, TCP and SMS for flexibility in connectivity.
- Internal offline logging to preserve position and sensor data when cellular coverage is interrupted.
- Low power modes and configurable reporting intervals to reduce average current draw during long idle periods.
- Sensor and I/O flexibility including 1-wire DS18B20 temperature probe support, analog input, digital I/O, optional TPMS and long-range RFID integration where fitted.
- Rugged IP67 PC+ABS enclosure with mounting options including removable magnets for metal surfaces.

## How These Features Work with Plaspy

The AT21-4G can report location, sensor readings and event states into Plaspy so fleet managers and asset custodians can monitor assets in real time and review historical activity. Plaspy ingests the device feeds and presents the combined location and telemetry on maps, alerts and reports for operational oversight.

- Real-time location updates and route playback in Plaspy when the device transmits position data.
- Sensor telemetry such as temperature, analog sensor readings and TPMS or RFID inputs visible alongside location data in Plaspy dashboards and logs.
- Event visibility for digital I/O such as ignition or immobilizer state changes that can be used to trigger alerts or workflows in Plaspy.
- Offline log reconciliation where stored device logs are forwarded after connectivity is restored so Plaspy can reconstruct historical tracks.
- Configurable reporting intervals and low-power behavior in the device reduce transmissions while Plaspy retains continuity through received updates and logged records.

## Typical Use Cases

- Remote trailer and container tracking where solar charging and large battery capacity minimize maintenance visits.
- Rail and boxcar asset supervision requiring rugged enclosures and multi GNSS accuracy for positional awareness.
- Offsite mining equipment monitoring where DC supply is unreliable and long-term telemetry retention is required.
- Anti-theft and immobilization workflows combining monitored ignition input and digital I/O with Plaspy alerts and event handling.
- Cold chain or environmental monitoring using 1-wire temperature sensors in conjunction with location reporting.
- Mixed sensor deployments that aggregate temperature, analog readings, TPMS and RFID tag data for consolidated asset insight.

## Feature Availability Notes

- Feature sets and exact behavior can differ between firmware versions and hardware revisions; check the device label and firmware notes for specifics.
- Regional cellular band kits and firmware provisioning may change available networks and fallback behavior by market.
- Optional accessories such as magnets, TPMS modules or RFID add-ons affect installed capability and may not be present on every unit.
- Installation factors such as solar exposure and mounting orientation affect solar charging performance and autonomous life.
- Manufacturer documentation and release notes are the authoritative source for hardware limits, sensor compatibility and upgrade paths.

## Why Use Plaspy with These Features

Using the AT21-4G with Plaspy provides a practical path to long-term, low-maintenance asset visibility. The combination of solar charging, large battery capacity and low-power modes reduces on-site servicing while Plaspy consolidates location and sensor data into maps, alerts and historical reports that support operational decisions and incident response.

To learn more about how Plaspy can integrate device data and help manage remote assets, visit https://www.plaspy.com. For the latest, device specific technical specifications, firmware details and manufacturer guidance please verify information with Totemtech at http://www.totemtek.com/ as manufacturer features and firmware behavior can change over time.
