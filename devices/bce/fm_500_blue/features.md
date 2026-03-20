---
slug: /bce/fm_500_blue/features
id: fm_500_blue-features
sidebar_label: Features
title: BCE - FM-500 Blue Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the BCE FM-500 Blue GPS tracker and how it works with Plaspy for fleet and asset tracking
keywords:
  - BCE FM-500 Blue features
  - FM-500 Blue GPS tracker
  - BCE FM-500 Blue Plaspy
  - FM-500 Blue features Plaspy
  - BCE GPS tracker FM-500 Blue
  - FM-500 Blue fleet tracking
  - FMS CAN J1939 FM-500 Blue
  - OBDII FM-500 Blue
  - GPS GLONASS tracker
  - vehicle tracking BCE
---

# BCE - FM-500 Blue Features

This page provides a public feature-level overview of the BCE FM-500 Blue and how its capabilities map to the Plaspy platform. It is intended to help fleet managers, integrators, and asset owners understand the practical functions the FM-500 Blue can provide when used with Plaspy for location, monitoring, and basic vehicle data collection.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. Where useful, this page references general device capabilities; always verify specific feature presence and behavior for your unit and firmware with the manufacturer documentation and release notes.

## Feature Overview

The FM-500 Blue is an object and vehicle tracking device built around GNSS positioning and cellular reporting. It provides continuous location updates plus additional inputs and interfaces to capture vehicle and asset state, and it is designed for flexible configuration to adapt to various tracking scenarios.

- GNSS positioning with location, speed, and heading information suitable for vehicle and asset tracking.
- Cellular GSM data transfer to report position and events to a server for central monitoring.
- Digital and analog inputs for connecting external sensors and monitoring discrete signals.
- Outputs for remote activation of external equipment or signaling based on events.
- FMS CAN J1939 and OBDII capable interfaces for reading vehicle bus data where supported.

## Core Features of BCE - FM-500 Blue

- GPS and GLONASS satellite positioning to provide accurate location, speed, and direction.
- GSM connectivity for transmitting tracking reports over the mobile network.
- Digital inputs for detecting external binary events and vehicle signals.
- Analog inputs for monitoring simple analog sensor values when required.
- Configurable outputs to control or trigger external devices remotely.
- FMS CAN J1939 reading capability to access vehicle bus parameters on supported vehicles.
- OBDII and CAN support for light vehicle integrations where the interface is present.
- Internal backup battery for short duration power continuity during power interruptions.

## How These Features Work with Plaspy

Plaspy receives device reports from compatible trackers and surfaces location, event, and vehicle data in its monitoring and reporting tools. When an FM-500 Blue is configured to report to Plaspy, the platform can display position traces and make input and certain vehicle-bus data visible alongside standard geolocation information.

- Position, speed, and direction reported by the device appear on Plaspy maps and trip history.
- Digital and analog input events can be recorded and shown as events or inputs in device dashboards.
- Outputs can be used operationally and their state or activation events can be logged in Plaspy when the device reports them.
- FMS CAN J1939 and OBDII data read by the device can be forwarded to Plaspy as vehicle parameters when available and mapped by the integration.
- Plaspy automatically detects many tracker protocols and accepts device reports to the Plaspy server domain d.plaspy.com using TCP or UDP as configured for the device.
- Device-side configuration and thresholds determine what data the tracker sends to Plaspy and how frequently it reports.

## Typical Use Cases

- Fleet vehicle tracking and route history for operational oversight and dispatch.
- Remote monitoring of equipment or assets that move between sites.
- Collecting basic vehicle bus parameters from FMS CAN J1939 or OBDII where supported for fleet diagnostics and usage reporting.
- Triggering remote outputs for simple control tasks or to signal external equipment.
- Integrating discrete sensor signals into a central monitoring workflow via digital and analog inputs.
- Short duration backup power support to maintain reporting during brief power loss situations.

## Feature Availability Notes

- Feature presence depends on the exact FM-500 Blue hardware revision and the firmware level installed on the device.
- Vehicle bus functionality such as FMS CAN J1939 and OBDII access requires compatible vehicle interfaces and proper wiring during installation.
- Input and output behavior can be affected by installation wiring, external sensor compatibility, and configuration settings applied by dealers or integrators.
- Regional cellular network differences and SIM provisioning influence how reliably the device can report to Plaspy over GSM.
- Plaspy receives and interprets data that the device is configured to send; review device configuration when specific event or telemetry visibility is required.

## Why Use Plaspy with These Features

Using the FM-500 Blue with Plaspy brings location, event visibility, and vehicle data into a centralized monitoring environment where operations teams can view live positions, review history, and act on input events. Plaspy’s device handling and mapping of reported parameters make it practical to combine GNSS positioning, digital and analog inputs, and supported vehicle bus data into a single operational view for fleet and asset management.

To learn more about using Plaspy with compatible trackers and to review platform capabilities, visit https://www.plaspy.com. For the most current device specific specifications, firmware behavior, and manufacturer guidance please verify details on the official BCE website http://www.bce.en/ .
