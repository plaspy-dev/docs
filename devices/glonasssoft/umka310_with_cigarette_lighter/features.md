---
slug: /glonasssoft/umka310_with_cigarette_lighter/features
id: umka310_with_cigarette_lighter-features
sidebar_label: Features
title: GLONASSsoft - UMKa310 with cigarette lighter Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the GLONASSsoft UMKa310 cigarette lighter tracker and how its telemetry and protocol support work with Plaspy
keywords:
  - GLONASSsoft UMKa310 features
  - UMKa310 cigarette lighter tracker
  - UMKa310 Plaspy compatibility
  - EGTS tracker support
  - Wialon Combine tracker
  - cigarette lighter GPS tracker
  - vehicle fuel monitoring RS485
  - Bluetooth 4.0 GPS tracker
  - black box 10000 records
  - multi server GPS tracker
---

# GLONASSsoft - UMKa310 with cigarette lighter Features

This page provides a public, features-oriented overview of the GLONASSsoft UMKa310 with cigarette lighter and how its documented capabilities relate to use with Plaspy. It focuses on practical, non-sensitive descriptions of the tracker functions that are relevant to fleet managers, integrators, and users who plan to connect the device to Plaspy-hosted backends.

Exact feature availability, reporting behavior, and user experience can vary by device firmware, hardware revision, installation type, and manufacturer implementation. For the most current device-specific details refer to the manufacturer documentation and release notes.

## Feature Overview

The UMKa310 is a compact plug-in GPS tracker designed for quick deployment and continuous vehicle telemetry. It supports industry protocols and options that make it suitable for fleet tracking, fuel monitoring, and anti-theft workflows when paired with a backend like Plaspy.

- EGTS and Wialon Combine protocol support for straightforward integration with cloud platforms such as Plaspy
- Plug-in cigarette lighter form factor for fast, noninvasive installation and temporary use
- Low data consumption with batch transfer modes while still supporting frequent position updates
- Optional RS-485 connection for fuel level sensors to enable fuel telemetry reporting to Plaspy
- Local configuration using Bluetooth 4.0 plus remote configuration options for flexible management

## Core Features of GLONASSsoft - UMKa310 with cigarette lighter

- Support for EGTS protocol and Wialon Combine binary transfer for compatibility with Plaspy backends
- Simultaneous transmission to up to three servers to enable redundancy and split reporting
- Batch mode transfer to reduce GPRS traffic while maintaining high frequency updates
- Bluetooth 4.0 for local setup and onsite configuration
- Optional RS-485 interface for connecting 1 to 3 fuel level sensors for fuel telemetry
- Onboard black box storage capable of preserving up to 10,000 records for event history
- 32 channel GNSS reception for reliable position fixing in a compact device
- Cigarette lighter plug form factor for rapid installation without hardwiring

## How These Features Work with Plaspy

When connected to Plaspy, the UMKa310 reports position and telemetry using open protocols the platform accepts. Plaspy automatically detects many common tracker protocols and can ingest data from devices configured to send to Plaspy endpoints, enabling operational visibility on maps and dashboards.

- Real-time location and telemetry appear on Plaspy maps and vehicle timelines for monitoring and dispatch
- Batch transfers reduce cellular traffic while Plaspy still reflects frequent position updates and telemetry events
- Multi server capability allows reporting to Plaspy alongside other endpoints for redundancy or parallel workflows
- Fuel sensor data delivered over RS-485 can be surfaced in Plaspy reports and fuel consumption views when configured
- Black box records can be replayed or used for incident reconstruction once uploaded to Plaspy
- Bluetooth based local setup simplifies device provisioning before it begins reporting to Plaspy

## Typical Use Cases

- Fleet operations that need fast installation and immediate location visibility without vehicle hardwiring
- Fuel monitoring deployments that integrate RS-485 fuel sensor data into Plaspy cost and consumption reports
- Short term or temporary anti-theft installations where a plug-in tracker provides quick coverage
- Vehicles that benefit from onboard event logging for post-incident analysis and compliance audits
- Scenarios where reduced data usage is important and batch mode transfers lower operational costs
- Redundant reporting setups that send telemetry to multiple servers including Plaspy for resilience

## Feature Availability Notes

- Feature support can depend on the installed firmware version and manufacturer options enabled by the vendor
- Optional hardware interfaces such as RS-485 and optional sensors may not be present on every unit or regional variant
- Manufacturer configuration choices and regional regulatory variants can affect available reporting modes and protocols
- Multi server transmission and batch modes require correct configuration on both the device and receiving backends
- Always confirm feature support, wiring, and installation guidance with the official manufacturer documentation

## Why Use Plaspy with These Features

Using the UMKa310 with Plaspy provides a practical route to deploy compact, plug-and-play trackers across a fleet while retaining access to telemetry, fuel data, and event history. Plaspy’s platform can present location and telemetry from EGTS or Wialon Combine compatible devices on maps, timelines, and reporting views to support operational decisions and oversight.

To learn more about Plaspy and how it integrates with devices like the UMKa310 visit https://www.plaspy.com. For the most up to date device specifications, firmware notes, and manufacturer guidance, verify details on the GLONASSsoft site at https://glonasssoft.ru/.
