---
slug: /ulbotech/t363b/features
id: t363b-features
sidebar_label: Features
title: Ulbotech - T363B Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for the Ulbotech T363B GPS tracker and how it integrates with Plaspy for vehicle tracking and telemetry
keywords:
  - Ulbotech T363B
  - T363B features
  - Ulbotech GPS tracker
  - OBD GPS tracker
  - vehicle telemetry
  - Plaspy compatible tracker
  - OBD CAN telemetry
  - immobilizer support
  - BLE vehicle tracker
  - fleet tracking device
---

# Ulbotech - T363B Features

This page summarizes the public feature context for the Ulbotech T363B and explains how those capabilities are used with Plaspy. It focuses on user facing functions, operational value, and what organizations can expect when integrating this plug and play OBD tracker with the Plaspy platform.

Exact feature availability and behavior can vary by device firmware, hardware revision, installation method and manufacturer implementation. For precise technical details, firmware change notes and model variants consult the official Ulbotech documentation and your device supplier.

## Feature Overview

The T363B is a compact OBD plug in tracker designed to provide vehicle position, OBD and CAN telemetry, and anti theft controls while delivering data to Plaspy for visualization and reporting. It combines GNSS position fixes, BLE support, motion sensing and remote engine cut capabilities to support fleet and asset workflows.

- Plug and play OBD installation for quick deployment without permanent wiring changes
- High sensitivity GNSS for accurate position tracking and fast fixes
- OBD and SAE J1939 CAN telemetry for vehicle diagnostic and operational data
- Integrated immobilizer control to support remote engine cut for theft mitigation
- Bluetooth Low Energy support for pairing driver ID tags or sensor accessories

## Core Features of Ulbotech - T363B

- OBD II plug in form factor for rapid onboarding and simple installation
- High sensitivity u‑blox GNSS positioning for reliable location reporting
- Support for OBD protocols and SAE J1939 CAN for vehicle data collection
- Internal accelerometer for motion detection and driver behavior events
- Integrated immobilizer digital output for remote engine cut control
- Bluetooth 4.0 BLE for accessory pairing and driver identification workflows
- Internal backup battery and onboard memory for continued logging during brief power interruptions
- FOTA capable firmware management for remote updates when supported

## How These Features Work with Plaspy

When configured, the T363B streams location, vehicle telemetry and event flags into Plaspy where the platform maps data into live views, historical playback, alerts and reports. Plaspy presents these inputs in dashboards and can surface telemetry driven rules for operational oversight.

- Live location and route playback based on GNSS reports sent from the device
- OBD and CAN telemetry appears in Plaspy as vehicle status and engine related data for monitoring and analytics
- Motion and accelerometer based events translate into driver behavior flags and incident markers in Plaspy
- Remote immobilizer support can be integrated with Plaspy alert rules or workflows to initiate controlled engine cut actions
- BLE accessory inputs such as driver ID or external sensor presence can be reflected as supplementary device data in Plaspy

## Typical Use Cases

- Fleet management with live tracking, route history and driver behavior scoring
- Usage based insurance and driver risk assessment through telemetry and event reporting
- Rental fleet monitoring with quick plug and play installation and remote immobilization options
- Asset protection and cargo condition monitoring using BLE sensors paired with the tracker
- Safety and roadside assistance workflows that rely on location and vehicle status visibility

## Feature Availability Notes

- Exact feature set depends on firmware version and the device hardware revision deployed in the field
- OBD and CAN data availability can vary by vehicle make, model and available ECU data for that vehicle
- BLE, immobilizer and other optional functions may require specific device configuration or accessory pairing
- Regional cellular support and firmware features may differ by market or supplier distribution
- Verify the device model and firmware notes from Ulbotech to confirm features before operational deployment

## Why Use Plaspy with These Features

Using the T363B with Plaspy gives organizations a straightforward path to combine GNSS location, vehicle telemetry and immobilizer control into a single monitoring and reporting workflow. The plug and play OBD form factor reduces installation time, while BLE and accelerometer inputs extend how driver identity and behavior can be captured and acted on in Plaspy.

To learn more about how Plaspy can present and act on data from the Ulbotech T363B visit https://www.plaspy.com. For the most current device specific details, firmware notes and manufacturer guidance please review the official Ulbotech documentation at http://www.ulbotech.com/ as features and firmware behavior can change over time.
