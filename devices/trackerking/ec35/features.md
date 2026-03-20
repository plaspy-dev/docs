---
slug: /trackerking/ec35/features
id: ec35-features
sidebar_label: Features
title: TrackerKing - EC35 Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for TrackerKing EC35 GPS tracker compatibility with Plaspy covering tracking, sensors, durability and fleet telemetry
keywords:
  - TrackerKing EC35 features
  - TrackerKing EC35 GPS tracker
  - EC35 Plaspy compatibility
  - TrackerKing EC35 functions
  - EC35 vehicle tracking
  - EC35 fuel sensor support
  - EC35 IButton driver ID
  - EC35 4G tracker
  - EC35 IP68 tracker
  - EC35 fleet telemetry
---

# TrackerKing - EC35 Features

This page describes the public feature context for using the TrackerKing EC35 with Plaspy. It summarizes the EC35 capabilities that matter to Plaspy users, including tracking, telemetry inputs, and remote control options. The purpose is to explain how the tracker’s features map to Plaspy functionality and typical operational uses without replacing manufacturer documentation.

Exact feature availability and behavior can vary by device firmware, hardware revision, optional accessories, installation method, and regional variants. Where possible this page uses the EC35 model description as its factual basis, but customers should confirm specific feature sets and firmware behavior with the manufacturer and their device supplier.

## Feature Overview

The EC35 is a rugged vehicle tracker designed for continuous uptime and reliable reporting in mixed coverage areas. It combines cellular connectivity, durable packaging, and flexible sensor inputs so fleets and asset managers can monitor location and key vehicle status through Plaspy.

- Real time GPS tracking with route history playback for operational visibility and incident review
- 4G Cat1 cellular connectivity with automatic fallback to 2G to maintain reporting across varied coverage
- IP68 rated enclosure and a wide 9–90V input range for installation on cars, trucks, motorcycles, and heavy equipment
- Integrated inputs for fuel level and temperature sensors plus driver identification via IButton for attribution
- Internal backup battery to preserve reporting during primary power loss and support power related alerts

## Core Features of TrackerKing - EC35

- 4G Cat1 cellular modem with automatic fallback to 2G for resilient connectivity in mixed network areas
- Support for standard tracking protocols GT06, JT808, and Tianqin to simplify integration with platforms like Plaspy
- IP68 waterproof and rugged enclosure suitable for harsh vehicle and outdoor deployments
- Wide 9–90V input range and internal backup battery to reduce service interruptions and provide power event alerts
- ACC ignition detection and virtual ignition support for engine event monitoring and usage tracking
- Inputs for external fuel level and temperature sensors to extend telemetry for fuel management and cold chain visibility
- Driver identification via IButton and support for optional Bluetooth relay modules for local sensor pairing
- Remote engine and fuel cut off capability for immobilizer style control when integrated with Plaspy workflows

## How These Features Work with Plaspy

Plaspy ingests the EC35 location, telemetry, and status reports and exposes those signals in maps, history playback, alerts, and fleet dashboards. Plaspy automatically detects supported tracker protocols and presents device events in a way that supports operational monitoring and automated rules.

- Real time location updates and route history visible in Plaspy for dispatching and post trip analysis
- Ignition and virtual ignition events reflected in Plaspy for mileage, usage reporting, and engine event tracking
- Fuel level and external temperature sensor readings transmitted to Plaspy to support fuel management and cold chain monitoring
- Driver ID events from IButton and optional Bluetooth relay pairings shown in Plaspy for driver attribution and simple access control workflows
- Remote engine and fuel cut off actions exposed in Plaspy where configured to support anti theft and immobilizer workflows

## Typical Use Cases

- Fleet tracking and route oversight for cars, light trucks, and commercial vehicles
- Anti theft and recovery workflows combining location, immobilizer control, and status alerts
- Fuel monitoring programs that use external sensor inputs to detect consumption patterns and losses
- Cold chain and temperature sensitive cargo monitoring using external temperature sensors and historical playback
- Motorcycle and heavy equipment tracking where IP68 protection and wide voltage tolerance are important
- Driver attribution and shift handover processes using IButton identification and optional Bluetooth accessories

## Feature Availability Notes

- Some features depend on the device firmware version and may be added, changed, or disabled by manufacturer updates
- Hardware revisions and regional model variants can affect supported cellular bands, available inputs, or accessory compatibility
- Optional features such as Bluetooth relay modules or specific sensor types may require additional hardware or vendor configuration
- Installation method and wiring affect which inputs are available and how ignition or power loss events are reported
- Always verify required features for your deployment with the device supplier and review current manufacturer documentation

## Why Use Plaspy with These Features

Using the TrackerKing EC35 with Plaspy provides a practical path to unified location visibility, sensor telemetry, and remote control for vehicle fleets and mobile assets. The EC35’s rugged design, broad input range, and sensor interfaces help keep data flowing from diverse vehicles while Plaspy collects, displays, and acts on that information through maps, alerts, and reporting.

To learn more about how Plaspy can work with devices like the EC35 visit https://www.plaspy.com. For the latest device specific technical details, firmware notes, and accessories consult TrackerKing documentation at https://trackerking.cn/ since manufacturer features and firmware behavior can change over time.
