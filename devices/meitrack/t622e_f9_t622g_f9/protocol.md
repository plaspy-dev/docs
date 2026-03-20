---
slug: /meitrack/t622e_f9_t622g_f9/protocol
id: t622e_f9_t622g_f9-protocol
sidebar_label: Protocol
title: Meitrack - T622E-F9/T622G-F9 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Meitrack T622E F9 series compatibility with Plaspy
keywords:
  - Meitrack T622E-F9 protocol
  - Meitrack T622G-F9 protocol
  - Meitrack GPS protocol
  - T622 series tracking protocol
  - Plaspy device compatibility
  - vehicle tracking protocol
  - GPS tracker communication
  - fleet tracking protocol
  - Meitrack protocol guide
  - GPS telemetry integration
---

# Meitrack - T622E-F9/T622G-F9 Protocol

This page describes the public protocol context for using the Meitrack T622E‑F9 and T622G‑F9 vehicle trackers with Plaspy. It focuses on how the tracker communicates with Plaspy at a high level, the shared connection settings Plaspy exposes, and practical considerations for getting telemetry, GNSS positions and peripheral events into the Plaspy platform.

Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when devices report to its endpoint. Exact protocol behavior for the T622E‑F9 and T622G‑F9 can vary by firmware version, hardware revision and manufacturer implementation, so this page highlights the public, non sensitive integration context while recommending verification against Meitrack technical materials for firmware specific details.

## Protocol Overview

The tracker reporting protocol defines how the device packages location, telemetry and event data for delivery to a remote server such as Plaspy. For the T622E‑F9 and T622G‑F9 this includes GNSS position updates, CAN bus and serial telemetry, peripheral events from RFID or fuel sensors, and fallback messaging behavior when cellular is not available.

- Enables the device to deliver periodic or event driven location updates that Plaspy can convert into map points and history records
- Carries CAN bus and serial telemetry so Plaspy can surface engine diagnostics, fuel readings and custom vehicle fields
- Encodes peripheral events such as relay state changes, RFID authentication and camera triggers for audit and alerting workflows
- Supports fallback delivery paths so the device can maintain reporting when primary cellular networks are unavailable
- Includes buffering and delayed upload behaviors so messages are preserved during coverage gaps and delivered to Plaspy when connectivity returns

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single shared endpoint and port used by all supported trackers. When a properly configured T622E‑F9 or T622G‑F9 reports to Plaspy, the platform observes the incoming traffic and uses its detection mechanisms to associate the device data with the correct handler. In most cases users do not need to manually select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The port is 8888 and Plaspy uses the same port for all devices it supports
- Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint
- Users typically only need to configure the device to point at the Plaspy endpoint and transport method for automatic detection

## Transport and Connection Context

The T622E‑F9 and T622G‑F9 can be configured to use common transport methods to reach Plaspy. Connection choices affect delivery behavior, latency and what the device will do during coverage gaps. This section summarizes the public transport context for reporting to Plaspy without attempting to describe internal packet formats.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Devices may be pointed to the Plaspy server domain d.plaspy.com or directly to the IP 54.85.159.138
- All devices in Plaspy use the same port which simplifies device provisioning and firewall configuration
- Transport selection can influence retransmission and delivery guarantees when the device moves through mixed coverage areas
- When cellular is unavailable the device can use its satellite fallback path to maintain reporting to Plaspy where supported by the specific model and configuration

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available telemetry fields and fallback behavior; always check the device firmware level when validating compatibility
- Hardware revisions or optional accessories can add or remove supported peripherals that appear in reports sent to Plaspy
- Transport selection between UDP and TCP should match the device configuration and network infrastructure policies at the deployment site
- Manufacturer configuration commands or provisioning tools may be required to point devices at d.plaspy.com or 54.85.159.138 on port 8888
- Iridium or satellite fallback behaviors depend on the model variant and may require additional provisioning or service activation
- Validate expected CAN and serial telemetry fields against both device documentation and Plaspy field mappings before large scale deployments

## Why Protocol Understanding Matters

Understanding the device reporting protocol helps ensure reliable onboarding, accurate telemetry mapping and faster troubleshooting. Knowing what to expect from the tracker at the protocol level reduces integration time and helps operations teams respond to connectivity or data quality issues.

- Speeds device onboarding by aligning device configuration with Plaspy endpoint and transport requirements
- Helps map CAN bus and serial telemetry fields into Plaspy dashboards and reporting templates
- Improves troubleshooting by clarifying whether issues are transport related, firmware behavior, or data mapping discrepancies
- Supports planning for coverage gaps by understanding device buffering and satellite fallback behavior
- Guides testing and validation workflows for firmware updates and hardware changes

## Why Use Plaspy with This Protocol

Using the Meitrack T622E‑F9 or T622G‑F9 with Plaspy provides fleet operators a practical path to centralized visibility, event driven alerting and long term telemetry analytics. The device hardware offers rich vehicle interfaces and global connectivity options which, when combined with Plaspy, enable tracking, diagnostics and automated responses across mixed coverage routes.

If you want to learn more about how Plaspy handles device compatibility and what to expect when deploying Meitrack trackers, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes and accessory compatibility confirm information with the manufacturer at https://www.meitrack.com/
