---
slug: /xirgo/xt_2400/features
id: xt_2400-features
sidebar_label: Features
title: Xirgo - XT-2400 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the Xirgo XT-2400 OBD II GPS tracker and how its capabilities map into Plaspy for fleet and vehicle monitoring
keywords:
  - Xirgo XT-2400
  - XT-2400 features
  - Xirgo XT 2400 GPS
  - XT-2400 OBD II tracker
  - XT-2400 accelerometer
  - XT-2400 DTC diagnostics
  - Xirgo tracker Plaspy compatibility
  - XT-2400 vehicle tracking
  - XT-2400 driver behavior
  - XT-2400 fleet management
---

# Xirgo - XT-2400 Features

This page describes the public feature context for using the Xirgo XT-2400 with Plaspy. The XT-2400 is a plug and play OBD II device for passenger and light duty vehicles that provides GPS location, vehicle parameters, and diagnostic data. This document focuses on user facing capabilities and how those capabilities can be represented when the device is used with Plaspy.

Exact feature availability can vary by firmware version, hardware revision, vehicle OBD implementation, and installation type. Where features are scriptable or configurable on the device, behavior may differ depending on the configuration the installer or fleet operator applies. Always consult manufacturer documentation for device specific behavior.

## Feature Overview

The XT-2400 combines an OBD II connection with embedded cellular and GPS antennas plus a high precision GPS engine and an accelerometer. It is positioned for straightforward installation and flexible deployment across fleet, aftermarket, and consumer scenarios.

- Plug and play OBD II connection for fast installation in compatible vehicles
- High precision GPS engine for reliable location reporting and tracking
- Integrated accelerometer to detect movement and acceleration events
- Access to vehicle identifiers and state such as VIN and ignition status
- Diagnostic fault code reporting for maintenance visibility and troubleshooting

## Core Features of Xirgo - XT-2400

- Plug and play OBD II interface for passenger and light duty vehicles
- Embedded cellular and GPS antennas for integrated communications
- High precision GPS engine for accurate position reporting
- Built in accelerometer to detect movement and acceleration changes
- Read vehicle identifiers and operating state including VIN and ignition status
- Diagnostic fault codes DFCs DTCs accessible for service and maintenance workflows
- Scriptable capability enabling customization to specific reporting and event needs
- Intended applications include mobile resource management aftermarket automotive and driver behavior monitoring

## How These Features Work with Plaspy

When used with Plaspy the XT-2400’s location and OBD derived data can be collected and displayed within the Plaspy platform so teams can monitor vehicles and events in one place. Plaspy automatically detects many supported tracker protocols which simplifies device onboarding.

- GPS positions from the XT-2400 appear on Plaspy maps for live tracking and historical playback
- OBD derived fields such as VIN ignition status and speed are shown as vehicle identifiers and telemetry in Plaspy
- Diagnostic fault codes reported by the device can surface as maintenance or alert items for review
- Accelerometer based movement or impact related events can be represented as motion or event records for driver behavior analysis
- The XT-2400 is scriptable allowing custom event payloads that Plaspy can ingest when the device is configured accordingly
- Plaspy accepts device connections to its ingestion endpoint and can operate with the device over UDP or TCP where supported by the installer

## Typical Use Cases

- Fleet vehicle tracking for location visibility and route oversight
- Aftermarket telematics for service shops and vehicle resellers
- Consumer vehicle monitoring for family or personal vehicle awareness
- Driver behavior monitoring and coaching using accelerometer events and trip data
- Vehicle health and maintenance workflows driven by DTC reporting
- Mobile resource management for light duty vehicle deployments

## Feature Availability Notes

- Feature sets depend on device firmware and may change with firmware updates or OEM revisions
- Hardware revisions or regional variants of the XT-2400 can affect available sensors or reporting options
- Data available from OBD II depends on the vehicle make model and OBD provisioning by the manufacturer
- Scriptable features require device configuration and may not be enabled by default
- For operational deployments verify both device firmware and Plaspy account settings to ensure expected data flows

## Why Use Plaspy with These Features

Using the Xirgo XT-2400 with Plaspy brings vehicle location telemetry diagnostics and event awareness into a unified platform. Plaspy provides map based tracking historical trip review and alerting that make it practical to turn the XT-2400 data into operational insight for fleets and vehicle programs. The XT-2400’s OBD II integration and diagnostic reporting complement Plaspy’s visibility and reporting capabilities for maintenance and asset management.

Learn more about Plaspy on the main website https://www.plaspy.com. Device features firmware behavior and manufacturer implementation details can change over time so verify the latest device specific information on the manufacturer site https://xirgo.com/ and in the official Xirgo documentation.
