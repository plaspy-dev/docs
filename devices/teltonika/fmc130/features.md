---
slug: /teltonika/fmc130/features
id: fmc130-features
sidebar_label: Features
title: Teltonika - FMC130 Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for the Teltonika FMC130 GPS tracker and how it works with Plaspy fleet management
keywords:
  - Teltonika FMC130 features
  - Teltonika FMC130 GPS tracker
  - FMC130 Plaspy compatibility
  - FMC130 fuel monitoring
  - FMC130 CAN adapter
  - FMC130 Bluetooth LE
  - FMC130 immobiliser
  - FMC130 internal battery
  - fleet tracking FMC130
  - GPS tracker FMC130
---

# Teltonika - FMC130 Features

This page provides a public, non sensitive overview of the Teltonika FMC130 tracker and how its documented features are used with Plaspy for fleet management and telemetry. It focuses on practical capabilities and operational value when the FMC130 is paired with the Plaspy platform.

Exact feature availability and behavior can vary by firmware version, hardware revision, accessory selection, installation type, and manufacturer implementation. For device specific technical limits and the latest firmware behavior consult the official Teltonika documentation.

## Feature Overview

The FMC130 is a telemetry focused vehicle tracker designed for continuous visibility and operational control. When used with Plaspy it delivers location reporting, fuel pulse monitoring, vehicle bus telemetry via an adapter, and support for external sensors to provide environmental and cargo condition data.

- 4G LTE Cat 1 cellular connectivity with automatic fallback to 2G for broader regional coverage
- Internal backup battery to maintain tracking and alerts during temporary power loss
- Dedicated impulse input for pulse based fuel flow meter readings to support fuel monitoring
- CAN adapter compatibility to access vehicle parameters when an adapter is fitted
- Bluetooth Low Energy support for external sensors and beacons such as temperature and movement devices

## Core Features of Teltonika - FMC130

- Cellular connectivity designed for reliable position and telemetry upload in mobile environments
- Internal backup battery that sustains basic reporting during power interruptions
- Impulse input dedicated to pulse based fuel flow meters for accurate fuel monitoring
- Support for a CAN bus adapter to read vehicle signals and telemetry where available
- Bluetooth Low Energy (BLE) capability to pair external sensors and beacons
- Flexible wired inputs and outputs to integrate with vehicle ignition and accessory signals
- Remote engine blocking and immobiliser control supported by the device and usable from management platforms
- Remote firmware and configuration management via Teltonika FOTA WEB for fleet scale updates

## How These Features Work with Plaspy

Plaspy receives and normalizes incoming telemetry from the FMC130 so fleet operators can monitor live location, review historical tracks, and act on events. Plaspy automatically detects the tracker protocol and accepts device connections to provide centralized visibility and controls.

- Real time location and historical playback visible on the Plaspy dashboard for operational oversight
- Fuel pulse data from the impulse input reported into Plaspy to support consumption analysis and loss detection workflows
- CAN adapter sourced vehicle parameters (where present) displayed as telemetry in Plaspy for maintenance and performance monitoring
- BLE sensor data forwarded to Plaspy for cargo condition monitoring such as temperature or movement events
- Remote immobiliser and engine blocking actions available from Plaspy for anti theft response and fleet control
- Devices can be configured to communicate with Plaspy using the platform's standard device connection options and are detected automatically

## Typical Use Cases

- Fleet tracking and dispatch where real time location and historical routes guide routing and scheduling
- Fuel monitoring and theft detection using the impulse input to capture fuel flow pulses
- Vehicle diagnostics and maintenance planning using CAN adapter telemetry to track key vehicle metrics
- Cargo condition monitoring such as refrigerated loads using Bluetooth sensors for temperature and movement
- Anti theft and remote immobilisation to control vehicle access from a central console
- Large scale fleet firmware and configuration rollouts using remote management tools

## Feature Availability Notes

- Some features require specific firmware versions or optional accessories such as a CAN adapter or external BLE sensors
- Hardware revisions and regional model variants can affect supported cellular bands and available interfaces
- Installation type and wiring can influence which wired inputs and outputs are available for use
- Remote immobiliser and engine blocking depend on correct vehicle integration and local legal or safety requirements
- Always verify supported features for a specific device serial number and firmware level with the manufacturer documentation

## Why Use Plaspy with These Features

Using the FMC130 with Plaspy gives organizations a consolidated view of location, fuel telemetry, and vehicle signals across their fleet. Plaspy’s platform takes the device telemetry and turns it into operationally useful information such as live tracking, event alerts, and historical reporting to support daily fleet operations and decision making.

If you want to learn more about how Plaspy can use the FMC130 in your fleet, visit https://www.plaspy.com. For the most current device specific technical details, firmware notes, and accessory options verify the information on the manufacturer site https://www.teltonika-gps.com/ .
