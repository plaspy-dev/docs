---
slug: /teltonika/fmc13a/features
id: fmc13a-features
sidebar_label: Features
title: Teltonika - FMC13A Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the Teltonika FMC13A GPS tracker and how it works with Plaspy for fleet tracking in North America
keywords:
  - Teltonika FMC13A features
  - Teltonika FMC13A GPS tracker
  - FMC13A Plaspy compatibility
  - Teltonika FMC13A capabilities
  - LTE Cat 1 tracker North America
  - vehicle tracking FMC13A
  - FMC13A fuel monitoring
  - CAN adapter support FMC13A
  - fleet management Plaspy
  - GPS tracker features Plaspy
---

# Teltonika - FMC13A Features

This page provides a public overview of the Teltonika FMC13A feature set and explains how those features relate to use with Plaspy. It summarizes the tracker capabilities that are most relevant for fleet tracking, remote monitoring, and operational oversight when paired with the Plaspy platform. Use this page to understand the practical value of the device in a Plaspy deployment.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. For device specific technical details, firmware notes, wiring diagrams, and the latest specifications consult Teltonika documentation and firmware release notes.

## Feature Overview

The FMC13A is a 4G LTE Cat 1 tracker designed for North America with multi GNSS support, CAN adapter compatibility, fuel flow impulse input, and remote control capabilities. Its combination of cellular connectivity and vehicle data interfaces makes it suitable for fleet applications that need reliable positioning, vehicle telemetry, and remote operational control.

- LTE Cat 1 cellular connectivity for reliable network coverage in North America
- Multi GNSS support for improved positioning accuracy across GPS GLONASS GALILEO BEIDOU QZSS and AGPS
- CAN adapter support to read vehicle data such as fuel level, odometer, RPM and engine parameters
- Impulse input for integration with fuel flow meters to support fuel usage monitoring
- Remote engine block and fleet control capabilities for operational interventions where supported
- Compact form factor with IP41 ingress protection for standard vehicle installations

## Core Features of Teltonika - FMC13A

- LTE Cat 1 cellular modem tailored for North American networks
- Multi constellation GNSS receiver supporting GPS GLONASS GALILEO BEIDOU QZSS and AGPS
- CAN adapter compatibility to access in-vehicle data channels for light and heavy vehicles
- Impulse input dedicated for fuel flow meter data collection to assist fuel monitoring
- Remote engine blocking capability to support fleet control and security workflows
- Bluetooth interface for local configuration and tuning with compatible Teltonika tools
- Compact physical design with IP41 rating and an operating temperature range suitable for typical vehicle environments

## How These Features Work with Plaspy

Plaspy receives compatible telemetry and position reports from the FMC13A and presents them in a central fleet view. Plaspy automatically detects the tracker protocol and accepts device connections to its server, enabling location, event, and control workflows to be visible to fleet operators.

- Location updates and multi GNSS fixes appear on Plaspy maps for real time and historical tracking
- CAN derived telemetry such as odometer and engine parameters can be displayed in Plaspy dashboards when the tracker is reporting that data
- Fuel usage metrics from impulse inputs can be surfaced in reports and consumption views if configured and transmitted by the device
- Remote control actions that the FMC13A supports, such as engine block commands, can be issued from Plaspy interfaces where device capabilities and deployment policy permit
- Plaspy automatically detects tracker protocol and accepts device connections, simplifying onboarding of FMC13A devices into the platform

## Typical Use Cases

- Fleet location tracking for commercial vehicle operations across North America
- Fuel consumption monitoring and reconciliation using impulse input and CAN data
- Remote immobilization and security response for stolen or unauthorized vehicle use
- Mixed fleet telemetry collection across cars, trucks, buses and special machinery using CAN adapter support
- Asset oversight where multi GNSS support improves positioning reliability in varied environments

## Feature Availability Notes

- Specific features such as CAN channels available and exact data points depend on vehicle make, CAN adapter configuration, and firmware versions
- Remote control functions require proper configuration, permissions, and may be subject to regional legal and safety considerations
- GNSS performance and availability are influenced by antenna installation, environment, and the GNSS constellations available in a location
- Hardware revisions or regional variants may affect cellular band support or available interfaces
- Always consult Teltonika firmware changelogs and the device hardware manual for the most current behavior and wiring guidance

## Why Use Plaspy with These Features

Using the FMC13A with Plaspy centralizes position and vehicle telemetry into a single operational view, enabling dispatch, monitoring, and analysis workflows that rely on consistent location and CAN derived data. Plaspy's device detection and standard device onboarding reduce configuration overhead and help make FMC13A data available quickly to fleet operators.

Learn more about Plaspy and how it can integrate FMC13A trackers by visiting https://www.plaspy.com. For the latest device specifications, firmware details, and manufacturer documentation verify current information on the official Teltonika site https://www.teltonika-gps.com/ as device features and firmware behavior can change over time.
