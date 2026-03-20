---
slug: /bce/fm_500_light/features
id: fm_500_light-features
sidebar_label: Features
title: BCE - FM-500 Light+ Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for BCE FM-500 Light+ GPS tracker and how it works with Plaspy for location and IO monitoring
keywords:
  - BCE FM-500 Light+ features
  - BCE FM-500 Light+ GPS tracker
  - FM-500 Light+ features
  - FM-500 Light+ Plaspy
  - BCE tracker features
  - GPS tracker capabilities
  - asset tracking BCE
  - vehicle tracking BCE
  - 1-Wire RS-232 EIA-485
  - digital analog inputs outputs
---

# BCE - FM-500 Light+ Features

This page provides a public feature overview of the BCE FM-500 Light+ and how its capabilities map to the Plaspy platform. It summarizes the device functions that are relevant for tracking, monitoring, and basic remote control when the tracker is used with Plaspy, and it is intended as a high level guide rather than a replacement for manufacturer documentation.

Exact feature availability and behavior can vary by firmware version, hardware revision, specific installation and wiring, and manufacturer implementation choices. Where relevant, this page highlights practical, user facing capabilities drawn from the device description and how those capabilities are typically represented inside Plaspy.

## Feature Overview

The FM-500 Light+ is designed for object and vehicle tracking with a compact footprint and a set of I O interfaces for connecting sensors and control devices. Its GNSS and cellular connectivity allow position and movement information to be reported over the mobile network and integrated into fleet and asset management platforms like Plaspy.

- GNSS location reporting using GPS and GLONASS for position and movement awareness
- GSM cellular data transfer to report location and input states to remote servers
- Digital and analog inputs for monitoring external sensors and triggers
- Digital outputs to control external equipment remotely
- Multiple physical interfaces including 1 Wire iButton compatibility, RS 232, and EIA 485 for expanded sensor and accessory support

## Core Features of BCE - FM-500 Light+

- GPS and GLONASS positioning for basic location, speed, and heading reporting
- GSM data communication to send location and input/output events to remote platforms
- Digital inputs for monitoring on off states from external switches and sensors
- Analog inputs for reading variable sensor signals where supported by the installation
- Digital outputs to drive or signal external devices for remote control scenarios
- 1 Wire iButton interface for accessory or identification use cases
- RS 232 and EIA 485 serial interfaces for integration with third party equipment
- Internal backup battery and compact, rugged form factor suitable for many installations

## How These Features Work with Plaspy

Plaspy ingests the FM-500 Light+ reporting and presents location and I O information alongside other fleet data. Plaspy automatically detects the tracker protocol and normalizes received data so that device location, movement, and reported input states are available for monitoring and reporting.

- Location and movement are displayed on Plaspy maps with time stamped position updates
- Reported digital and analog input changes appear as events or telemetry items inside Plaspy
- Digital outputs can be represented in Plaspy for status display and, where configured, remote command workflows
- Serial and 1 Wire attached peripherals are typically exposed via configured input channels so their state or identifiers can be tracked inside Plaspy
- Plaspy can accept connections from compatible devices and will detect device protocol automatically to simplify integration

## Typical Use Cases

- Vehicle and asset location tracking for routing and recovery
- Remote monitoring of equipment status using digital and analog inputs
- Controlling auxiliary devices through digital outputs for basic remote actions
- Integrating accessory devices via RS 232 or EIA 485 for extended telemetry
- Identification or access logging using the 1 Wire iButton interface
- Deployments that need a compact tracker with internal battery backup for intermittent power situations

## Feature Availability Notes

- Firmware versions can enable, change, or disable specific functions and settings; always verify the firmware level for capability details
- Hardware revisions and regional variants may alter available interfaces or supported input ranges
- Physical installation and wiring determine which inputs and outputs are accessible and how sensors report data
- Manufacturer configuration options and dealer customization can affect how data is presented and which features are active
- For precise electrical and protocol details consult the official manufacturer documentation

## Why Use Plaspy with These Features

Using the FM-500 Light+ together with Plaspy gives organizations a simple path to convert raw location and I O signals into actionable operational insight. Plaspy brings unified device handling, map visualization, event logging, and reporting so the tracker data can be used for monitoring, alerts, and basic remote control workflows without building custom backend services.

If you want to learn more about how Plaspy supports device fleets and how compatible trackers are integrated, visit https://www.plaspy.com. Note that device features, firmware behavior, and manufacturer implementation details can change over time, so always verify the latest device specific information on the official BCE site at http://www.bce.en/.
