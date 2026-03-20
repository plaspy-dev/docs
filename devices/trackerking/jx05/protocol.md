---
slug: /trackerking/jx05/protocol
id: jx05-protocol
sidebar_label: Protocol
title: TrackerKing - JX05 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for TrackerKing JX05 GPS tracker and Plaspy compatibility with GT06 JT808 and Tianqin options
keywords:
  - TrackerKing JX05 protocol
  - TrackerKing JX05 GPS protocol
  - TrackerKing JX05 protocol for Plaspy
  - TrackerKing JX05 communication protocol
  - TrackerKing JX05 tracking protocol
  - JX05 GT06 JT808 Tianqin
  - JX05 Plaspy compatibility
  - TrackerKing asset tracker protocol
  - GPS tracker JX05 protocol
  - Plaspy device protocol
---

# TrackerKing - JX05 Protocol

This page describes the public protocol context for using the TrackerKing JX05 with Plaspy. It focuses on the communication behavior relevant to integration and monitoring rather than internal firmware or proprietary details. The goal is to help technical users and integrators understand how the tracker reports data to Plaspy and what to check during setup and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact message behavior and available features can vary with JX05 firmware, hardware revision, and manufacturer configuration; users should confirm device-specific behavior with TrackerKing when needed. The JX05 typically reports using GT06 protocol by default and can be configured to use JT808 or Tianqin mappings where those options are offered.

## Protocol Overview

The JX05 communication protocol is the set of message conventions the tracker uses to identify itself, report GNSS positions, and forward alarms and status to a server. For the JX05, protocol selection determines how events like movement, vibration, geofence, and low battery are encoded and interpreted by a backend such as Plaspy.

- Enables the JX05 to transmit periodic location updates and immediate alarm events to a remote server for centralized monitoring.
- Allows the device to identify itself and deliver device identifiers and status fields that Plaspy uses to associate telemetry with an asset.
- Provides a mapping for event types such as movement, vibration, geofence enter and exit, overspeed, and low battery so alerts are actionable in Plaspy.
- Supports alternate message mappings where JT808 or Tianqin options are available to match integrator requirements.
- Lets Plaspy ingest telemetry into dashboards and alerting rules once messages arrive at the shared Plaspy endpoint.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections at a single shared endpoint and port and automatically determines the tracker protocol based on the incoming traffic and device identifiers. In most deployments, if the JX05 is configured to report to the Plaspy endpoint, no manual protocol selection is required inside the platform.

- Plaspy accepts device traffic at d.plaspy.com and at the public server IP 54.85.159.138 on port 8888.
- The platform supports both UDP and TCP reporting modes on port 8888, allowing devices to use the transport they support.
- Because Plaspy uses the same port for all devices, JX05 units can be pointed to the shared address without per device port changes.
- Automatic detection simplifies setup for integrators who configure the JX05 to report using GT06 or the available JT808 or Tianqin mappings.
- If a device is not correctly reporting, verifying the target endpoint and transport is the first troubleshooting step.

## Transport and Connection Context

Connection context covers how the JX05 opens communications and which endpoints to configure when integrating with Plaspy. The device may be set to use either UDP or TCP on port 8888 depending on the firmware option and integrator preference.

- JX05 devices can be configured to send data to d.plaspy.com or directly to 54.85.159.138.
- The supported transport options include UDP and TCP on port 8888; choose the mode that matches the device configuration and network environment.
- Plaspy uses the same port 8888 for all supported devices, which simplifies firewall and routing configuration.
- For cellular deployed assets, confirm that the SIM and network allow outbound connections to the Plaspy endpoint and port.
- Network reliability and packet latency can affect delivery; review device power settings and reporting intervals to balance battery life and real time needs.

## Protocol Compatibility Notes

- The JX05 commonly uses GT06 protocol by default; JT808 or Tianqin mappings may be selectable depending on firmware and device provisioning.
- Firmware revisions can change message fields, available alarms, and behavior; verify the firmware version if unexpected differences are observed.
- Hardware revisions or regional variants may affect supported transports or optional features such as vibration detection sensitivity.
- Selecting UDP versus TCP affects delivery semantics and may be constrained by the mobile network or SIM provider.
- When integrating with a custom backend in addition to Plaspy, ensure the selected mapping matches the server expectations.
- Always validate compatibility against the manufacturer documentation and confirm current defaults before large scale deployment.

## Why Protocol Understanding Matters

Understanding the JX05 communication protocol helps ensure reliable setup, accurate event mapping, and efficient troubleshooting when the tracker is used with Plaspy. Knowledge of how the device reports and what fields are sent reduces integration time and improves operational visibility.

- Speeds initial configuration by ensuring the device points to the correct Plaspy endpoint and transport.
- Reduces false alarms by aligning device alarm thresholds and event mappings with Plaspy alert rules.
- Helps diagnose connectivity issues by verifying transport, endpoint, and SIM network behavior.
- Enables informed decisions about reporting intervals and power saving modes to optimize battery life and tracking fidelity.
- Clarifies which message mappings are in use when JT808 or Tianqin options are selected instead of GT06.

## Why Use Plaspy with This Protocol

Using the JX05 with Plaspy provides a practical way to centralize location and alarm telemetry for unattended assets. Plaspy ingests the tracker messages and exposes them in dashboards, reports, and alerting workflows so operations teams can monitor trailers, containers, and equipment without manual polling.

Plaspy accepts device traffic at a shared endpoint and port and automatically detects the tracker protocol, which streamlines deployment and reduces configuration overhead. To learn more about Plaspy and how it can work with devices like the TrackerKing JX05, visit https://www.plaspy.com. For the latest device specific protocol details, firmware information, and manufacturer guidance, review the official TrackerKing resources at https://trackerking.cn/ since protocol support and firmware behavior can change over time.
