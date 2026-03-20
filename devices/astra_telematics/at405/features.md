---
slug: /astra_telematics/at405/features
id: at405-features
sidebar_label: Features
title: Astra Telematics - AT405 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Astra Telematics AT405 GPS tracker and how its capabilities integrate with Plaspy for fleet tracking and telemetry
keywords:
  - Astra Telematics AT405 features
  - AT405 GPS tracker
  - AT405 Plaspy compatibility
  - Astra Telematics vehicle tracking
  - AT405 BLE sensor integration
  - AT405 CANBus telemetry
  - AT405 LTE Cat 1 connectivity
  - AT405 IP65 tracker
  - AT405 low power operation
  - AT405 immobilizer control
---

# Astra Telematics - AT405 Features

This page provides a public feature overview of the Astra Telematics AT405 and how its capabilities are used with Plaspy for fleet tracking, connected vehicle projects, and moto sharing. It focuses on user facing functions and operational value when the AT405 is connected to Plaspy for real time monitoring, event visibility, and historical reporting.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. Where relevant, this page highlights practical considerations and encourages verification of device specific details with Astra Telematics documentation.

## Feature Overview

The AT405 is a compact, vehicle focused telematics unit designed for moto sharing and light vehicle fleets. It combines cellular connectivity, multi constellation GNSS, BLE, vehicle interfaces and a small backup battery to deliver continuous location and vehicle telemetry suitable for Plaspy integration.

- Real time GNSS positioning using multiple satellite constellations for improved location reliability.
- LTE Cat 1 cellular link for continuous reporting of location and telemetry to Plaspy.
- Vehicle integration through CANBus plus digital inputs and outputs for status monitoring and actuator control.
- BLE support for short range sensor and beacon integration to extend telemetry or enable proximity workflows.
- IP65 enclosure and a broad input voltage range to support motorcycles, scooters and light vehicles.
- Low power design with a 510mAh backup battery to preserve tracking during power interruptions.

## Core Features of Astra Telematics - AT405

- Multi constellation GNSS support including GPS, Galileo, GLONASS and BeiDou for robust positioning.
- LTE Cat 1 cellular connectivity for live reporting and remote visibility.
- CANBus interface for vehicle telemetry where vehicle messages are available.
- Two digital inputs and two digital outputs for ignition and actuator control such as immobilization.
- Bluetooth Low Energy for short range sensor and beacon integration.
- Internal 510mAh backup battery for limited backup operation during power loss.
- IP65 rated enclosure with automotive connector options for fleet installations.
- Additional interfaces including 1-Wire, RS232 and vehicle grade hardware components for integration flexibility.

## How These Features Work with Plaspy

When connected, the AT405 streams location, status and telemetry into Plaspy where teams can monitor vehicles in real time, review historical movements and trigger alerts based on events. Plaspy automatically detects compatible tracker protocols and visualizes key data for operational use.

- Real time location and position history appear on Plaspy maps for live tracking and route review.
- Vehicle status and event updates from digital inputs and CANBus can be surfaced as alerts or dashboard indicators.
- BLE sensor data and short range telemetry can be associated with vehicles in Plaspy to enrich context for each unit.
- Digital outputs can be used to implement remote immobilization or other actuator workflows and the resulting state is visible in Plaspy.
- Reporting intervals and payload options can be customized so Plaspy receives the telemetry mix needed for monitoring and analytics.

## Typical Use Cases

- Moto sharing and scooter fleets requiring compact IP65 hardware for city deployments.
- Fleet management for motorcycles and light vehicles using CANBus telemetry for operational insights.
- Anti theft and immobilization workflows combining movement detection and remote output control.
- Shared mobility check in and check out workflows using BLE proximity and beacons.
- Aftermarket retrofit installations where broad voltage range and automotive connectors simplify integration.
- Last mile and light commercial operations needing compact trackers with low power modes.

## Feature Availability Notes

- Some features depend on installed firmware and the specific hardware revision of each unit; capabilities can change with firmware updates.
- CANBus visibility depends on the vehicle and which messages the vehicle exposes on its network.
- BLE integrations require supported sensors and local pairing or provisioning to make sensor data available to the device and Plaspy.
- Battery backup runtime is influenced by reporting frequency, power settings, and the vehicle electrical system used during installation.
- Regional cellular band support varies by product variant; consult the product datasheet for regional band coverage.

## Why Use Plaspy with These Features

Using the AT405 with Plaspy gives operators a practical path to combine real time location, vehicle telemetry and short range sensor data in a single monitoring platform. The AT405’s vehicle grade interfaces and compact form factor make it useful for scooter and motorcycle fleets where space, durability and power flexibility matter.

Learn more about how Plaspy can visualize and act on AT405 data by visiting https://www.plaspy.com. For the latest device specifications, firmware behavior and manufacturer details verify current information on the Astra Telematics website https://astratelematics.com/.
