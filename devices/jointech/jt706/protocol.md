---
slug: /jointech/jt706/protocol
id: jt706-protocol
sidebar_label: Protocol
title: Jointech - JT706 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Jointech JT706 and how it communicates with Plaspy for container tracking and condition monitoring
keywords:
  - Jointech JT706 protocol
  - Jointech JT706 GPS protocol
  - JT706 communication protocol
  - JT706 tracking protocol
  - Jointech tracker Plaspy
  - JT706 container tracker
  - GPS tracker protocol Plaspy
  - container monitoring JT706
  - JT706 temperature telemetry
  - Plaspy device compatibility
---

# Jointech - JT706 Protocol

This page provides a public, non sensitive overview of the communication context for the Jointech JT706 when used with Plaspy. It focuses on how the tracker reports location and environmental telemetry to the Plaspy platform and what to expect from the connection and transport settings used for integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to the platform. Exact protocol behavior and message content can vary by JT706 firmware version, hardware revision, and manufacturer configuration, so this page emphasizes public protocol context rather than firmware internals.

## Protocol Overview

The JT706 uses its reporting protocol to deliver hybrid positioning and sensor data to a remote server so platforms like Plaspy can ingest, normalize, and present usable tracking and condition information. Protocol behavior ties device messages to the platform for real time visibility, alerts, and historical analysis without exposing implementation details here.

- Enables periodic and event driven reporting of position and sensor telemetry to the cloud platform.
- Carries identification and state information so Plaspy can associate each device with an account and asset.
- Conveys environmental readings such as temperature and humidity alongside door and load state for operational monitoring.
- Supports hybrid positioning inputs so location fixes can come from GPS and cellular based methods to improve continuity.
- Allows the platform to trigger alarms and timeline events from incoming telemetry for incident response and compliance workflows.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a shared endpoint and port and applies automatic detection to identify the tracker protocol. In most cases, users do not need to choose a protocol manually inside Plaspy if the JT706 is configured to report correctly to the platform endpoint.

- Plaspy uses a single port across all supported devices so incoming reports are routed consistently to the same ingestion endpoint.
- Devices that point their reporting target to d.plaspy.com or to the platform IP are accepted and processed by Plaspy.
- Automatic detection means Plaspy recognizes the device protocol variant from the initial traffic and applies the appropriate handling.
- Proper device identification depends on the JT706 including its device ID or equivalent identifier in reports so the platform can link data to the correct asset.
- When a device is misconfigured or blocked by network rules, the platform will not receive telemetry and troubleshooting should start with network and reporting settings on the device.

## Transport and Connection Context

The JT706 can be set to use either UDP or TCP transport depending on the device configuration and network environment. Plaspy accepts both transport modes on the shared port to simplify device setup and reduce configuration error.

- Devices may be configured to send reports using UDP or TCP on port 8888.
- JT706 units can point to the Plaspy server by hostname d.plaspy.com or directly to the platform IP 54.85.159.138.
- All devices in Plaspy use the same port to make onboarding and provisioning consistent across models.
- Choice of UDP versus TCP often depends on firmware settings, network reliability, and operator preference for delivery characteristics.
- Ensure firewall and NAT settings allow outbound traffic to the Plaspy endpoint on the configured transport and port.

## Protocol Compatibility Notes

- Firmware revisions on JT706 units can change message cadence, available sensors in reports, and optional fields; verify firmware-specific behavior before wide deployment.
- Different hardware revisions or production batches may include variation in sensor availability or event reporting modes.
- Transport selection between UDP and TCP should match the device configuration and any operator or carrier network constraints.
- Manufacturer configuration commands and remote settings are outside the scope of this public overview; consult Jointech documentation for device configuration steps.
- Plaspy automatically detects the incoming protocol but correct device identification requires the device to send a valid identifier in its reports.
- Validate compatibility in a controlled test first to confirm that telemetry, alarms, and historical logging behave as expected in your Plaspy instance.

## Why Protocol Understanding Matters

Knowing the general behavior of the JT706 reporting protocol helps ensure successful setup, faster troubleshooting, and reliable long term operation when integrated with Plaspy. Clear expectations about transport, addressing, and firmware variation reduce downtime and improve data quality.

- Helps confirm the device is pointing to the correct Plaspy endpoint and using the supported transport.
- Speeds diagnosis when telemetry is missing by focusing checks on network, transport, and device reporting configuration.
- Ensures identification fields used by the tracker match the records in Plaspy so data maps to the right asset.
- Guides decisions about whether to use UDP or TCP based on latency, reliability, and carrier network characteristics.
- Encourages verification of firmware release notes and device settings before large scale rollouts to avoid surprises.

## Why Use Plaspy with This Protocol

Using the Jointech JT706 with Plaspy provides centralized visibility for container monitoring and cargo condition management. The combination of hybrid location fixes and environmental sensors enables operations teams to receive timely alerts for door events, temperature excursions, and suspected tampering while preserving historical logs for compliance and analysis.

Plaspy simplifies device onboarding by accepting JT706 reports on a single shared port and applying automatic protocol detection so devices that are configured to send telemetry to d.plaspy.com or 54.85.159.138 on port 8888 can begin reporting with minimal platform configuration. To learn more about Plaspy and how it can centralize container telemetry, visit https://www.plaspy.com. For the most current JT706 firmware behavior, device configuration options, and manufacturer implementation details verify the official Jointech documentation at https://www.jointcontrols.com/ for accuracy and updates.
