---
slug: /gosafe/g797/features
id: g797-features
sidebar_label: Features
title: Gosafe - G797 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the Gosafe G797 GPS tracker and how it integrates with Plaspy for fleet and insurance telematics
keywords:
  - Gosafe G797
  - Gosafe G797 features
  - Gosafe G797 GPS tracker
  - Gosafe G797 Plaspy
  - OBD2 GPS tracker
  - vehicle telematics
  - fleet management tracker
  - insurance telematics
  - FNOL crash reconstruction
  - GNSS OBD telemetry
---

# Gosafe - G797 Features

This page provides a public overview of the Gosafe G797 features relevant to using the device with Plaspy. It describes the practical capabilities you can expect when the G797 is deployed with Plaspy for fleet management, insurance telematics, and rental or leasing programs.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. Vehicle support for specific OBD PIDs, optional sensor bundles, cellular banding, and provisioning options may differ between units and regions.

## Feature Overview

The G797 is a compact plug-and-play OBDII tracker designed to combine GNSS positioning with in-vehicle diagnostics for operational monitoring and event workflows. It is intended to stream location, diagnostic and event data into telematics platforms such as Plaspy to support live visibility and post-event analysis.

- Direct OBDII (J1962) plug-and-play installation for fast deployment across vehicles.
- Accurate GNSS positioning using a Ublox 6 engine with SBAS assistance for improved positional accuracy.
- OBD and J1939 diagnostics including VIN extraction and access to vehicle PIDs where available.
- Built-in self‑calibrating 3D accelerometer with an optional 6D accelerometer/gyroscope for event detection and reconstruction.
- Cellular connectivity with GPRS/EDGE reporting and optional UMTS/LTE variants for broader regional support.
- Remote provisioning and firmware updates via GICUS and USB tooling to streamline fleet rollouts.

## Core Features of Gosafe - G797

- Plug-and-play OBDII connection that supplies vehicle identification and OBD-derived telemetry to Plaspy.
- Ublox 6 GNSS receiver with SBAS support for improved positioning accuracy and sensitivity.
- Self‑calibrating 3D accelerometer onboard, with an optional 6D IMU for enhanced event and crash data.
- Support for common OBD and diagnostic protocols including J1939 and standard OBDII protocols to read VIN, odometer sources and available PIDs.
- Cellular reporting over GPRS/EDGE with available UMTS/LTE variants depending on the unit purchased.
- Remote configuration and firmware management using GICUS and USB provisioning workflows.
- Optional Bluetooth and accessory support on models where that capability is provided by the manufacturer.
- Rugged design and environmental tolerance built for vehicle use and fleet deployments.

## How These Features Work with Plaspy

When connected to Plaspy, the G797 supplies location, diagnostic, and event payloads that Plaspy ingests for live monitoring, historical playback, and automated workflows. Plaspy organizes and presents the combined GNSS and OBD data to support operational decision making.

- Live location and breadcrumb updates are displayed in Plaspy for real-time fleet visibility and track replay.
- VIN extraction and OBD-derived telemetry allow Plaspy to associate devices with vehicles and surface diagnostic values in dashboards.
- Multi-source odometer accumulation using OBD and GNSS data helps improve mileage accuracy for billing and maintenance reporting.
- Accelerometer and optional IMU events feed FNOL and incident workflows for rapid alerting and reconstruction inside Plaspy.
- Remote provisioning and firmware updates minimize field visits by enabling managed rollouts and configuration changes coordinated with Plaspy records.
- Collected telemetry can be used to trigger alerts, rules, and reporting in Plaspy according to your operational policies.

## Typical Use Cases

- Insurance telematics and usage based insurance programs that require VIN, driving traces and event data for underwriting and FNOL.
- Large fleet management for route monitoring, vehicle identification, and odometer reconciliation across mixed fleets.
- Leasing and rental operations needing tamper resistant OBDII installs and reliable mileage reporting for billing.
- Crash reconstruction and safety analytics using accelerometer and optional gyroscope data in post-incident review.
- Regional rollouts where optional cellular variants accommodate local network bands and provisioning requirements.
- Deployments requiring a compact, vehicle-integrated device for fast installation and minimal driver interaction.

## Feature Availability Notes

- Feature sets can differ by firmware build and hardware revision; optional sensors and cellular bands may not be present on every unit.
- OBD PID availability depends on the specific vehicle make, model, and ECM implementation and is not guaranteed for all parameters on all vehicles.
- Optional capabilities such as the 6D IMU, Bluetooth, or LTE variants require selecting the matching hardware variant at purchase.
- Installation method and the use of extension cables or T-connectors can affect data availability and theft/tamper considerations.
- Always consult current manufacturer documentation and release notes for the exact feature matrix and provisioning instructions.

## Why Use Plaspy with These Features

Using the Gosafe G797 with Plaspy provides a combined view of GNSS positions and vehicle diagnostics that helps organizations improve visibility, streamline maintenance workflows, and accelerate incident response. The unit's OBDII integration and event sensors complement Plaspy dashboards and alerts, enabling consolidated telemetry for operations, insurance analytics, and rental management.

To learn more about Plaspy and how it can work with the G797, visit https://www.plaspy.com. For the most current device specifications, firmware details, and manufacturer implementation notes, verify information with Gosafe at https://gosafesystem.com/ as features and behavior can change over time.
