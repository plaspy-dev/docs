---
slug: /topfly/pioneerx_100/features
id: pioneerx_100-features
sidebar_label: Features
title: TopFly - PioneerX 100 Features
sidebar_class_name: menu_item_tracker
description: Overview of TopFly PioneerX 100 GPS tracker capabilities and how it integrates with Plaspy for fleet tracking and telemetry
keywords:
  - TopFly PioneerX 100
  - PioneerX 100 features
  - TopFly GPS tracker
  - PioneerX 100 Plaspy
  - 4G GPS tracker
  - BLE 4.2 tracker
  - fleet tracking device
  - vehicle immobilizer tracker
  - offline position cache
  - GNSS multi constellation
---

# TopFly - PioneerX 100 Features

This page describes the public feature context for using the TopFly PioneerX 100 tracker with Plaspy. It summarizes the device capabilities that are relevant to fleet managers and integrators, and explains how those capabilities appear and operate when the tracker is connected to Plaspy for live monitoring, alerts, and historical reporting.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, and installation method. For device specific configuration steps, firmware changelogs, or hardware options consult the official manufacturer documentation as details can change over time.

## Feature Overview

The PioneerX 100 is a compact, hardwired tracker designed for continuous fleet and asset monitoring. Its combination of multi constellation GNSS, cellular fallback, configurable inputs and outputs, and BLE sensor support makes it suitable for real-time tracking, anti-theft workflows, and condition monitoring when paired with Plaspy.

- Multi constellation GNSS positioning for improved location accuracy and faster fixes than single constellation units.
- 4G CAT-1 cellular connectivity with 2G fallback to maintain coverage across regions and networks.
- Configurable digital and analog I/O for ignition detection, relay control and accessory monitoring useful for immobilizer and anti-theft setups.
- BLE 4.2 support to pair compatible Bluetooth sensors for environmental or cargo condition monitoring.
- Large local position cache to preserve historical location data during connectivity outages and forward when connection is restored.

## Core Features of TopFly - PioneerX 100

- High sensitivity GNSS with multi constellation reception for reliable position fixes.
- 4G CAT-1 cellular modem with 2G fallback for broad network coverage.
- Configurable digital and analog inputs and outputs for ignition detection and relay control.
- BLE 4.2 radio for pairing with compatible sensors and accessories.
- Local offline cache for thousands of location points to maintain trails when offline.
- Built-in backup battery to preserve critical messages and device state during power loss.
- Firmware over the air updates and USB Type-C configuration for remote management and easier installation.

## How These Features Work with Plaspy

When a PioneerX 100 is connected to Plaspy, device messages and events are ingested into Plaspy dashboards and reports so operators can see current status and historical activity. Plaspy automatically recognizes common tracker protocols and maps reported data to location, event, and telemetry views.

- Live location updates and telemetry appear on Plaspy maps and can be configured to report as frequently as the device and network allow.
- Digital input events such as ignition, door, or SOS triggers are shown as events and can generate alerts in Plaspy.
- Offline cached positions are uploaded to Plaspy after connectivity is restored, preserving historical tracks and enabling reliable playback.
- Paired BLE sensor readings and analog inputs reported by the device are available in Plaspy for condition monitoring and alerting.
- Remote commands and control flows that the tracker supports, such as relay actuation via digital outputs, can be orchestrated from Plaspy where supported by the device and installation.

## Typical Use Cases

- Fleet location and route monitoring with frequent position reporting for operational awareness.
- Vehicle anti-theft and immobilization workflows using ignition detection and relay control.
- Cold-chain or cargo condition monitoring by pairing BLE temperature and humidity sensors to the tracker.
- Remote asset tracking in areas with intermittent cellular coverage using the device cache to preserve trails.
- OEM vehicle integrations that require compact form factor, configurable I/O, and wide input voltage range.

## Feature Availability Notes

- Feature sets can differ by firmware and hardware revision; BLE sensor support, caching limits, and specific I/O behavior depend on the shipped firmware.
- Regional cellular band support and regulatory variants affect connectivity performance and availability in different markets.
- Optional accessories and enclosures such as an IP67 case may be offered separately and are not necessarily included with every unit.
- Some features, including remote control functions and specific sensor integrations, require correct installation and configuration to operate as expected.
- Always check the latest manufacturer release notes for any changes to supported sensors, protocols, or security options.

## Why Use Plaspy with These Features

Using the PioneerX 100 with Plaspy gives organizations centralized visibility into location, events, and telemetry from vehicles and assets. Plaspy captures live updates, handles offline data uploads, and presents sensor and event information in dashboards and reports that help with dispatch, security response, and compliance tracking.

Learn more about how Plaspy can present PioneerX 100 data and support operational workflows on the Plaspy website https://www.plaspy.com. For the most current device specifications, firmware details, and manufacturer variants please verify information with TopFly at https://www.topflytech.com/ as features and firmware behavior can change over time.
