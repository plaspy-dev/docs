---
slug: /arusnavi/arnavi_l3r100/features
id: arnavi_l3r100-features
sidebar_label: Features
title: Arusnavi - ARNAVI L3R100 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for ARNAVI L3R100 and how it works with Plaspy
keywords:
  - Arusnavi ARNAVI L3R100 features
  - ARNAVI L3R100 GPS tracker
  - Arusnavi L3R100 Plaspy compatibility
  - ARNAVI L3R100 BLE sensors
  - ARNAVI L3R100 RS485 support
  - multi constellation GNSS tracker
  - Arnavi protocol EGTS support
  - compact vehicle tracker
  - low power GPS tracker
  - fleet tracking telemetry
---

# Arusnavi - ARNAVI L3R100 Features

This page provides a public feature overview for the Arusnavi ARNAVI L3R100 and how its capabilities are used in Plaspy deployments. It focuses on the device features relevant to live tracking, telemetry collection, and fleet or asset monitoring when integrated with the Plaspy platform.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, and how the unit is installed or configured. For the most current device specific details and implementation guidance consult the manufacturer documentation and release notes from Arusnavi.

## Feature Overview

The ARNAVI L3R100 is a compact navigation controller and GPS tracker designed for constrained installations while supporting mixed wired and wireless telemetry. It combines multi constellation GNSS positioning, 2G GPRS connectivity, BLE sensor support, and wired sensor interfaces to provide a flexible telemetry node for vehicle and asset monitoring.

- Compact form factor and light weight for discreet installation in vehicles and assets
- Multi constellation GNSS for fast fixes and consistent position updates
- 2G GPRS connectivity for continuous reporting of location and telemetry
- Bluetooth Low Energy support for up to eight wireless sensors to extend telemetry without new wiring
- RS485 interface for multiple wired sensors to capture telemetry such as levels or temperatures
- Protected universal I O and discrete inputs for ignition or door status reporting and relay control workflows

## Core Features of Arusnavi - ARNAVI L3R100

- Multi constellation GNSS receiver covering GPS GLONASS GALILEO BEIDOU and QZSS for improved positioning
- GSM 2G GPRS connectivity for report transmission and remote telemetry
- Bluetooth Low Energy 4.0 support allowing connection of up to eight compatible BLE sensors
- RS485 interface supporting multiple wired sensors for telemetry collection
- Support for Arnavi and EGTS telemetry protocols for straightforward integration with monitoring platforms
- Ability to transmit simultaneously to two monitoring servers for redundancy and dual reporting
- Protected universal input output with discrete inputs suitable for ignition and door sensing and for controlling relays
- Web based remote configuration and firmware updates plus local configuration via USB Type C and onboard black box storage

## How These Features Work with Plaspy

When paired with Plaspy, the ARNAVI L3R100 reports position, sensor telemetry, and input states so operators can monitor vehicles and assets in real time and review historical activity. Plaspy automatically detects supported tracker protocols and ingests GNSS and telemetry data for visibility and automated workflows.

- Real time position updates and telemetry are available in Plaspy for live tracking and route playback
- Discrete inputs such as ignition or door status are mapped to events and can be used in Plaspy rules and reports
- BLE and RS485 sensor telemetry are reported into Plaspy for cargo temperature, level monitoring, and other telemetry views
- The device can be configured to report to Plaspy servers including d.plaspy.com and may use UDP or TCP on the standard Plaspy port for device connections
- Dual server transmission provides redundancy so Plaspy can receive data even if an alternate server is also configured

## Typical Use Cases

- Fleet vehicle tracking and route history for operational oversight and scheduling
- Anti theft workflows combining door and ignition inputs with remote relay control for immobilization strategies
- Remote telemetry collection for fuel level and temperature using wired RS485 sensors or supported BLE devices
- Mixed wired and wireless sensor installations where constrained wiring or distributed sensors are required
- Covert or space constrained asset installations that need compact GPS tracking with reliable reporting
- Redundant reporting scenarios where simultaneous transmission to multiple monitoring servers is desirable

## Feature Availability Notes

- Firmware versions and device configuration options influence which features are available and how they behave
- Hardware revisions and regional variants may change supported cellular bands or available interfaces
- Sensor compatibility for BLE and RS485 devices depends on supported sensor profiles and manufacturer integration
- Installation choices such as wiring, power source, and harness selection affect telemetry and input behavior
- Always confirm current capabilities and configuration procedures with Arusnavi documentation for your specific device batch

## Why Use Plaspy with These Features

Using the ARNAVI L3R100 with Plaspy lets organizations consolidate location and telemetry into a single monitoring platform. The combination of GNSS positioning, mixed sensor support, discrete inputs, and dual server transmission makes it practical to track vehicles, monitor cargo conditions, and implement event driven alerts and workflows inside Plaspy.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific feature details firmware behavior and official implementation notes consult the manufacturer website https://www.arusnavi.ru.
