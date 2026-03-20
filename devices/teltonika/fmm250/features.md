---
slug: /teltonika/fmm250/features
id: fmm250-features
sidebar_label: Features
title: Teltonika - FMM250 Features
sidebar_class_name: menu_item_tracker
description: Rugged IP67 vehicle tracker with extensive CAN telemetry and cellular connectivity compatible with Plaspy for fleet tracking and diagnostics
keywords:
  - Teltonika FMM250
  - Teltonika FMM250 features
  - FMM250 GPS tracker
  - FMM250 CAN data
  - Teltonika FMM250 Plaspy
  - vehicle GPS tracker Teltonika
  - LTE Cat M1 tracker
  - NB IoT GPS tracker
  - IP67 vehicle tracker
  - fleet telemetry tracker
---

# Teltonika - FMM250 Features

This page describes the public feature context for using the Teltonika FMM250 with Plaspy. It covers the device capabilities that are relevant to fleet operators and system integrators when the FMM250 is used as a Plaspy compatible tracker, focusing on what the tracker can provide to Plaspy for location, CAN derived telemetry, and operational monitoring.

Exact feature availability and behavior can vary by firmware version, hardware revision, SKU, regional RF configuration, and installation method. For device specific technical details, firmware behavior, and the latest parameter support, review the official Teltonika documentation and release notes.

## Feature Overview

The Teltonika FMM250 is a rugged vehicle tracker designed to bring detailed vehicle bus telemetry into fleet systems. Its combination of NB IoT and LTE Cat M1 cellular connectivity, built in CAN processing, and IP67-rated enclosure make it suitable for demanding vehicle and machinery installations where durable hardware and deep telemetry are required.

- High fidelity CAN data capture with support for more than 100 CAN bus parameters for engine, battery, EV states and other vehicle systems.
- Low power wide area cellular connectivity via LTE Cat M1 and NB IoT with variant dependent fallback to 2G for broad coverage.
- Rugged IP67 rated housing suitable for exposed on vehicle mounting in dusty or wet environments.
- Compatibility with Teltonika accessory ecosystem including CAN adapters, BLE sensors and RFID readers to extend telemetry.
- Remote management capabilities for firmware and configuration updates and support for multiple SKUs to match regional RF and parameter needs.

## Core Features of Teltonika - FMM250

- Built in CAN data processing capable of reading and reporting over 100 CAN bus parameters as exposed by the vehicle bus.
- LTE Cat M1 and NB IoT NB2 connectivity for efficient cellular telemetry with variant dependent fallback to 2G.
- IP67 rugged form factor designed for harsh vehicle and machinery environments.
- Plaspy compatible telemetry output so CAN parameters and location data can be ingested into fleet dashboards.
- Accessory support for Teltonika CAN adapters, BLE sensors and RFID readers to extend device capabilities.
- Multiple SKU options and regional RF configurations to match market and regulatory requirements.
- Remote management support for remote firmware and configuration provisioning.

## How These Features Work with Plaspy

When connected as a Plaspy compatible tracker, the FMM250 streams its cellular location updates and CAN derived telemetry into Plaspy where those data points are available for live monitoring, historical reporting and event workflows. Plaspy maps the incoming CAN parameters and telemetry into dashboard widgets, alerts, and reporting tools so operators can act on vehicle status and diagnostics.

- Real time location and telemetry appear in Plaspy for live fleet situational awareness and tracking.
- CAN parameter streams are mapped into Plaspy so engine, battery, EV and sensor values can be trended and reported.
- Device and telemetry events feed Plaspy alerting and notification rules to highlight diagnostic conditions or operational exceptions.
- Historical CAN and location data stored in Plaspy support maintenance analytics and performance reporting.
- Accessory sourced data such as BLE sensor readings can be surfaced in Plaspy when provided by Teltonika accessories and mapped by configuration.

## Typical Use Cases

- Fleet anti theft and immobilization workflows coordinated through telemetry and accessory outputs when exposed by vehicle wiring and SKUs.
- Predictive maintenance and remote diagnostics using the FMM250 CAN parameters to monitor engine and EV subsystem health.
- Driver behaviour monitoring and coaching by analyzing CAN derived events such as speed and related vehicle states exposed on the bus.
- Fuel monitoring and consumption reporting where fuel data is available on the vehicle CAN bus and forwarded to Plaspy.
- Harsh environment vehicle and machinery tracking in construction, agriculture, mining or similar sectors thanks to IP67 protection.
- EV fleet oversight using EV related CAN parameters for battery and drive system visibility where those parameters are available.

## Feature Availability Notes

- Supported CAN parameters depend on vehicle make, model, and the data exposed on the vehicle CAN bus; not all vehicles provide the same signals.
- Some connectivity and regulatory behaviors vary by SKU and region; select the appropriate regional RF configuration for your market.
- Feature sets such as accessory compatibility and extended parameter packages may require specific SKUs or optional adapters.
- Firmware version and device configuration can enable or limit particular telemetry fields; check firmware release notes for changes.
- Installation wiring and accessory fitment impact what inputs and vehicle signals the tracker can read and forward to Plaspy.

## Why Use Plaspy with These Features

Pairing the Teltonika FMM250 with Plaspy provides organizations with a practical path to turn vehicle bus telemetry into operational insight. The device's deep CAN data capture and rugged design make it well suited for fleets and heavy duty equipment where visibility and reliability are important. In Plaspy, operators can centralize location, diagnostics, and telemetry to support maintenance planning, security workflows, and performance reporting.

To learn more about using Plaspy with compatible trackers visit https://www.plaspy.com. For the most current device specifications, firmware behavior, and manufacturer implementation details please verify information on the official Teltonika website https://www.teltonika-gps.com/ which provides detailed technical resources and release notes.
