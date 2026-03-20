---
slug: /itriangle/ux101_al/features
id: ux101_al-features
sidebar_label: Features
title: iTriangle - UX101-AL++ Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the iTriangle UX101-AL++ GPS tracker and its practical use with Plaspy
keywords:
  - iTriangle UX101-AL++ features
  - UX101-AL++ GPS tracker
  - iTriangle GPS tracker
  - AIS 140 tracker
  - UX101-AL++ Plaspy
  - vehicle telematics
  - fleet tracking device
  - Vehicle FOTA tracker
  - dual CAN telematics
  - BLE WiFi tracker
---

# iTriangle - UX101-AL++ Features

This page describes the public feature context for using the iTriangle UX101-AL++ GPS tracker with Plaspy. It summarizes the device capabilities that are relevant to Plaspy users, explains how those capabilities can be used inside Plaspy, and highlights practical operational value for fleet and equipment monitoring. The content is based on the device description provided by the manufacturer and focuses on non sensitive, user facing details.

Exact feature availability and behavior can vary by firmware version, hardware revision, optional accessories, and installation choices. Specific functions such as CAN data mapping, VFOTA workflow, or accessory support depend on manufacturer implementation and device configuration, so verify the current details in official manufacturer resources.

## Feature Overview

The UX101-AL++ is a rugged AIS 140 certified telematics unit built for vehicle and industrial use. It offers wide area cellular coverage with fallback, vehicle diagnostics interfaces, local wireless connectivity, and features designed for durability and remote management. These capabilities make the device suitable for continuous position reporting, remote event logging, and integration with vehicle systems when used with Plaspy.

- Real time tracking and telemetry over cellular networks with fallback for broader coverage
- Dual CAN interfaces for connecting to vehicle ECUs and capturing diagnostic data
- Integrated BLE and single band Wi Fi for local sensor and accessory connectivity
- Rugged IP67 enclosure and ISO 16750 level durability for harsh environments
- Vehicle FOTA and remote management options to maintain firmware and ECU updates

## Core Features of iTriangle - UX101-AL++

- AIS 140 certification and vehicle grade durability including IP67 protection and ISO 16750 resilience
- Cellular connectivity optimized for LTE Cat 1 with 3G and 2G fallback for reliable coverage
- Dual CAN interfaces for ECU level diagnostics and vehicle sensor integration
- Internal BLE 5 and single band Wi Fi for local device pairing and data offload
- Vehicle FOTA capability to support remote ECU firmware updates
- Internal eSIM support, internal GSM GNSS BLE antennas, and compact rugged form factor
- Onboard storage and backup power including 512 MB local storage and an internal backup battery
- Multiple analog and digital inputs plus digital outputs and serial interfaces for accessory and I O integration

## How These Features Work with Plaspy

When deployed with Plaspy, the UX101-AL++ reports position, event logs, and vehicle telemetry so fleet managers and OEM teams can monitor assets and act on alerts. Plaspy interprets incoming telemetry and presents location and event data alongside other fleet information for operational oversight.

- Real time GNSS position and movement reporting shown on Plaspy maps and live monitoring widgets
- CAN based vehicle diagnostics and sensor channels available inside Plaspy for health and performance visibility
- Tamper and battery removal alerts, plus event logs, appear as events and notifications for security workflows
- BLE and local Wi Fi events can be surfaced in Plaspy when used for sensor integrations or local data syncs
- VFOTA and remote device management workflows can be coordinated through Plaspy to update vehicle firmware and device settings

## Typical Use Cases

- Fleet management and route visibility for commercial vehicle operations
- Anti theft and security workflows using tamper and battery removal alerts
- OEM deployments and smart mobility projects requiring ECU diagnostics and remote firmware updates
- Industrial and mining vehicle tracking in harsh environments with rugged hardware
- Logistics and asset tracking with local data storage and accessory integration for compliance

## Feature Availability Notes

- Feature sets can vary with firmware version and hardware revision; check the device SKU and firmware level for specific capabilities
- Certain functions such as CAN parameter mapping, VFOTA behavior, and accessory support may require configuration or optional modules
- Regional cellular band availability and network fallback behavior depend on the device variant and local carriers
- Physical installation and wiring choices affect the availability of inputs, outputs, and some event triggers
- For complete and authoritative technical details consult the manufacturer documentation

## Why Use Plaspy with These Features

Pairing the iTriangle UX101-AL++ with Plaspy gives organizations consolidated visibility over vehicles, remote event awareness, and tools to act on telemetry and diagnostic information. The combination supports operational monitoring, security workflows, and lifecycle management for vehicles and industrial assets without requiring separate systems for telemetry ingestion.

To learn more about Plaspy and how it can work with rugged telematics devices like the UX101-AL++ visit https://www.plaspy.com. For the latest device specific specifications, firmware notes, and manufacturer guidance verify current details on the official iTriangle site https://www.itriangle.net/. Device features, firmware behavior, and manufacturer implementations can change over time so consult the manufacturer for the most current information.
