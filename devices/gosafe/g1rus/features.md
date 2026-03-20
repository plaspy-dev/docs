---
slug: /gosafe/g1rus/features
id: g1rus-features
sidebar_label: Features
title: Gosafe - G1RUS Features
sidebar_class_name: menu_item_tracker
description: Public overview of Gosafe G1RUS features and how this low power tracker works with Plaspy for long term asset tracking and telemetry
keywords:
  - Gosafe G1RUS features
  - Gosafe G1RUS GPS tracker
  - G1RUS Plaspy compatibility
  - Gosafe asset tracker
  - G1RUS low power tracker
  - Gosafe GPS features
  - G1RUS geofencing
  - Gosafe telemetry
  - G1RUS waypoints
  - Gosafe fleet tracking
---

# Gosafe - G1RUS Features

This page provides a public feature overview for the Gosafe G1RUS when used with Plaspy. It describes the practical capabilities the device exposes for real-time tracking, telemetry, and asset management inside Plaspy and explains how those capabilities typically map to monitoring, alerts, and workflows.

Exact feature availability and behavior can vary by firmware version, hardware revision or variant, installation method and manufacturer implementation. For device specific details, firmware notes and the latest technical documentation refer to the manufacturer and release notes for the installed unit.

## Feature Overview

The G1RUS is built for long unattended deployments on trailers, containers and high value assets. It combines extremely low power consumption, rugged packaging and flexible power options with GNSS positioning and configurable telemetry to support months or years of reporting with minimal maintenance.

- Purpose built for long unattended deployments with multi year standby possibilities when configured for low daily reporting
- Flexible power options including replaceable CR123 batteries, optional rechargeable Li Po pack and external power variants for vehicle or powered assets
- Robust GNSS position reporting using a 56 channel u blox receiver with SBAS and GLONASS support for reliable fixes
- Multiple communications modes and regional variants to match available cellular networks and Plaspy integration
- Configurable digital I O and a 3D accelerometer for movement detection and event based reporting
- Optional Bluetooth 5.0 module to extend telemetry with compatible sensors and beacons

## Core Features of Gosafe - G1RUS

- Extremely low power hardware design suitable for long unattended asset tracking deployments
- Flexible power architecture: replaceable CR123 batteries, optional rechargeable Li Po pack, and an external power LB variant
- 56 channel u blox GNSS receiver with SBAS and GLONASS assistance for fast, accurate position fixes
- Quad band GSM communications with optional 3G and LTE Cat 1 variants for regional cellular coverage flexibility
- Configurable digital inputs and outputs plus a 3D accelerometer for movement events and simple external integrations
- Optional Bluetooth 5.0 for connecting BLE sensors and beacons to report additional asset conditions
- Remote management capabilities including firmware update over the air and conditional profile provisioning
- Rugged enclosure and multiple mounting options designed for trailers, containers and other exposed assets

## How These Features Work with Plaspy

Plaspy ingests the G1RUS position and telemetry reports and presents them as live location data, historical tracks and event-driven alerts. Where device firmware provides conditional reporting and profile management, those capabilities help maintain long battery life while ensuring Plaspy receives the events and telemetry needed for operational workflows.

- Live and historical location display in Plaspy using GNSS fixes reported by the device
- Movement and impact awareness from accelerometer events that can generate alerts and trigger workflows
- Geofences, time and speed profiles, and up to 128 waypoints can be used in Plaspy for stop validation and route management
- Device status and diagnostics such as battery state, power input detection and basic health indicators are shown for operational oversight
- Conditional reporting profiles reduce cellular usage and preserve battery life while still surfacing important events in Plaspy
- Remote provisioning and firmware update features allow fleet administrators to manage deployed devices when supported by device firmware and Plaspy workflows

## Typical Use Cases

- Long term trailer and container tracking where battery life and rugged mounting are primary requirements
- Delivery and route management using waypoints and time or speed based geofences to validate stops and improve operations
- Asset anti theft and recovery workflows using movement alerts and telemetry to generate rapid notifications in Plaspy
- Supplemental condition monitoring using optional Bluetooth sensors for cargo temperature, door status or proximity detection
- Seasonal or parked equipment monitoring where long battery life reduces maintenance visits and lowers total cost of ownership
- Mixed fleets where some assets use replaceable batteries and others use external power variants for flexible deployment

## Feature Availability Notes

- Some features are variant dependent; optional items such as Bluetooth, 3G or LTE support, and external power inputs may not be present on every unit
- Firmware version and configuration strongly affect reporting behavior, conditional profiles, and remote provisioning capabilities
- Hardware revisions and regional cellular variants can change band support and communications behavior
- Installation method and wiring affect which inputs, external sensors or vehicle interfaces are available for telemetry
- Always consult the device's manufacturer documentation and current firmware release notes for precise feature lists and configuration instructions

## Why Use Plaspy with These Features

Using G1RUS with Plaspy gives organizations a practical way to monitor long unattended assets with minimal maintenance overhead. The combination of low power electronics, flexible power options and configurable telemetry lets operators choose reporting cadences and integrations that balance battery life with operational visibility. Plaspy can display position, movement events, device status and sensor telemetry together, making it easier to manage fleets, validate deliveries, and respond to potential theft or misuse.

To learn more about Plaspy and how it can work with devices like the Gosafe G1RUS visit https://www.plaspy.com. Device features, firmware behavior and manufacturer implementation can change over time, so verify the latest device specific details and technical documentation on the manufacturer website https://gosafesystem.com/ before deploying at scale.
