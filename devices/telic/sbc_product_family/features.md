---
slug: /telic/sbc_product_family/features
id: sbc_product_family-features
sidebar_label: Features
title: Telic - SBC product family Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Telic SBC product family and how these GPS trackers integrate with Plaspy for fleet tracking and telemetry
keywords:
  - Telic SBC product family features
  - Telic SBC GPS tracker features
  - Telic SBC functions
  - Telic SBC capabilities
  - Telic SBC features for Plaspy
  - Telic SBC LTE Cat M1 tracker
  - Telic SBC CAN 1-Wire RS232
  - fleet tracking Telic Plaspy
  - trailer telematics Telic
  - Telic SBC production data acquisition
---

# Telic - SBC product family Features

This page provides a public feature overview for using the Telic SBC product family with Plaspy. It summarizes the practical capabilities that matter for fleet managers and integrators, and explains how SBC devices typically interact with Plaspy for real‑time tracking, telemetry reporting, and operational monitoring.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. Use this page as a guidance summary and consult Telic documentation and device datasheets for model specific details and the latest firmware behavior.

## Feature Overview

The SBC product family is a rugged telematics platform designed for vehicle and asset tracking and is Plaspy compatible out of the box. Devices in the family emphasize reliable cellular uplink, multiple wired interfaces for telemetry capture, and a mechanically robust housing to simplify vehicle and trailer installations.

- Plaspy compatible devices for real time location and telemetry reporting to centralized dashboards.
- LTE Cat M1 connectivity for wide area IoT communication and stable uplink for tracking.
- Multiple wired interfaces including CAN bus, 1-Wire, and RS232 to capture vehicle and sensor signals.
- Robust housing and integrated antenna to support quick mounting and consistent operation in vehicle environments.
- Optimized for fleet workflows such as route visibility, anti theft monitoring, fuel monitoring analytics, and trailer telematics.

## Core Features of Telic - SBC product family

- Plaspy compatibility for straightforward integration into fleet management workflows.
- LTE Cat M1 cellular connectivity to balance coverage and IoT power profiles.
- CAN bus interface support for vehicle bus level telemetry when available from the vehicle.
- 1-Wire and RS232 interfaces for serial sensors and production data capture.
- Rugged enclosure with an integrated antenna for dependable field mounting.
- Scalable design suitable for single vehicle deployments or fleet rollouts.
- Models in the family include SBC3 CAN 4G and SBC AVL 4G as examples of available variants.

## How These Features Work with Plaspy

When an SBC device is deployed and connected, it transmits location and telemetry so Plaspy can present position, history, and event data within its platform. Plaspy can automatically detect common tracker protocols and surface received signals in dashboards, reports, and automation rules.

- Real time location updates feed Plaspy map views and route replay for operational visibility.
- CAN bus telemetry received from the device can be mapped to Plaspy metrics where vehicle networks expose those signals.
- 1-Wire and RS232 sensor streams are ingested into Plaspy for logging and correlation with position data.
- Telemetry and location events can be used to trigger alerts, geofence responses, and automation rules in Plaspy.
- Historical data recorded by Plaspy supports reporting and analysis for maintenance and operational planning.

## Typical Use Cases

- Fleet management and route visibility for mixed vehicle fleets and trailers.
- Anti theft monitoring combining live location with vehicle status to detect unauthorized movement.
- Trailer telematics where a rugged device is mounted on unpowered assets and reports position and sensor data.
- Fuel monitoring and engine telemetry analysis using CAN bus data where available from the vehicle.
- Automatic production data acquisition for vehicles or equipment that expose serial or 1-Wire outputs.
- Scalable deployments to standardize telemetry across a large fleet for central reporting.

## Feature Availability Notes

- Feature presence depends on model variant and firmware; not all SBC family members expose identical interfaces.
- CAN bus telemetry requires the vehicle network to provide the relevant signals and correct wiring during installation.
- Regional cellular band support and certified variants can differ by model and market; consult datasheets for coverage details.
- Installation choices and hardware revisions can affect antenna performance, mounting options, and uptime.
- Always verify the device model, firmware level, and interface mapping before relying on a specific telemetry workflow.

## Why Use Plaspy with These Features

Using Telic SBC devices with Plaspy gives organizations a practical path from rugged hardware to centralized visibility. The combination of cellular uplink, wired telemetry interfaces, and a durable form factor lets fleet and asset teams collect meaningful signals and present them in Plaspy for monitoring, alerts, and operational decision making.

To learn more about how Plaspy can work with Telic SBC devices and to explore deployment options, visit https://www.plaspy.com. For the most current device specifications, firmware details, and model comparisons consult the manufacturer at https://www.telic.de. Device features and firmware behavior can change over time, so verify the latest manufacturer documentation for model specific capabilities.
