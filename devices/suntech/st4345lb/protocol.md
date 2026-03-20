---
slug: /suntech/st4345lb/protocol
id: st4345lb-protocol
sidebar_label: Protocol
title: Suntech - ST4345LB Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Suntech ST4345LB GPS tracker compatibility with Plaspy for reliable device communication and integration
keywords:
  - Suntech ST4345LB protocol
  - Suntech ST4345LB GPS protocol
  - ST4345LB Plaspy compatibility
  - Suntech GPS tracker protocol
  - ST4345LB communication protocol
  - Suntech tracking protocol
  - Plaspy device protocol
  - Suntech telemetry integration
  - ST4345LB fleet tracking
  - vehicle tracking Suntech
---

# Suntech - ST4345LB Protocol

This page describes the public protocol context for using the Suntech ST4345LB tracker with Plaspy. It focuses on how the device communicates in general terms, how Plaspy receives telemetry, and what to consider when integrating the ST4345LB into a fleet or asset monitoring deployment. The technical highlights of the ST4345LB such as multi mode cellular connectivity, BLE sensor support, and vehicle analytics provide the practical foundation for how reporting can be used in Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation, so real world behavior may differ between units. For Plaspy the common connection point is d.plaspy.com (54.85.159.138) on port 8888 and devices may be configured to use either UDP or TCP on that port.

## Protocol Overview

The ST4345LB device protocol defines how the tracker packages and transmits location, sensor, and event data over cellular links to a remote server. In integration terms the protocol's role is to provide Plaspy with consistent, identifiable telemetry that can be translated into location, status, and analytic events in the platform.

- Enables the tracker to report GNSS positions, motion and ignition status, and BLE sensor telemetry to Plaspy.
- Identifies the device and includes the fields necessary for Plaspy to associate reports with an account and asset.
- Carries event and diagnostic information that Plaspy uses for alerts, driver behavior scoring, and crash reconstruction inputs.
- Supports both real time updates and periodic reporting so Plaspy can maintain live views and historical trails.
- Works over standard TCP or UDP transport so carriers and connectivity choices can be adapted to deployment needs.

## How Plaspy Detects the Protocol

Plaspy listens on a single, shared endpoint and port and applies automatic detection routines to recognize incoming tracker reports. When an ST4345LB is configured to send data to the Plaspy endpoint, the platform typically recognizes the device format and begins ingesting telemetry without manual protocol selection in the UI.

- Plaspy uses the common endpoint d.plaspy.com and the public IP 54.85.159.138 for device reporting.
- All devices in Plaspy use the same port, simplifying device configuration and onboarding.
- If the ST4345LB is pointed at the Plaspy endpoint using TCP or UDP and proper credentials or identifiers are included, manual protocol selection is generally unnecessary.
- Automatic detection reduces setup complexity for fleets mixing multiple tracker models.
- Users should still verify device identifiers and reporting intervals to ensure expected behavior in Plaspy.

## Transport and Connection Context

Connection details describe the transport layer and addressing that a device uses to reach Plaspy. The ST4345LB supports cellular transports and can be configured to use either UDP or TCP depending on coverage, power considerations, and the deployment's tolerance for delivery characteristics.

- Devices can point to the Plaspy hostname d.plaspy.com or directly to the server IP 54.85.159.138.
- The agreed port for Plaspy device reporting is 8888 and all supported devices use this same port.
- The ST4345LB may be configured to use UDP or TCP on port 8888 depending on the firmware and installer choices.
- Transport choice affects delivery guarantees and might influence battery usage and reconnect behavior.
- Network firewalls and APN settings should allow outbound connections to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change message contents, available fields, and reporting behavior; confirm firmware release notes when evaluating compatibility.
- Hardware variants and region specific SKUs may have differences in radio bands or optional sensors that affect telemetry availability.
- Manufacturer configuration options may let the device operate over TCP or UDP; confirm which transport is active for your deployment.
- BLE sensor forwarding and advanced analytics depend on on device firmware and enabled features; not every unit may expose identical fields.
- Always validate sample reports from devices against Plaspy ingestion to ensure identifiers and timestamps match expected formats.
- When in doubt, consult the device's official documentation to verify configuration parameters used to point devices to Plaspy.

## Why Protocol Understanding Matters

Understanding the ST4345LB communication protocol makes installations smoother and troubleshooting more effective by clarifying what data the device will send and how Plaspy will interpret it. That knowledge helps technicians and operators align device configuration, carrier settings, and Plaspy account mappings for reliable telemetry.

- Ensures correct server, port, and transport settings are applied during provisioning.
- Helps diagnose connectivity issues such as blocked ports, misconfigured APNs, or incorrect server addresses.
- Clarifies which device events and sensor types will be available in Plaspy dashboards and reports.
- Aids in planning power and reporting intervals to balance battery life with data timeliness.
- Supports long term maintenance by tracking firmware changes that can alter message content or frequency.

## Why Use Plaspy with This Protocol

Using the ST4345LB with Plaspy combines rugged, low cost hardware with a platform designed to ingest location, sensor, and event telemetry for fleet visibility, recovery, and operational workflows. The device's GNSS, BLE sensor forwarding, and on board analytics like driving pattern analysis make it a practical choice for organizations that need reliable tracking and actionable insights.

If you want to learn more about how Plaspy supports device integrations and fleet management, visit https://www.plaspy.com. For the most current device specific protocol and firmware details confirm the latest documentation and release notes from the manufacturer at http://www.suntechint.com/ as protocol support and device behavior can change over time.
