---
slug: /suntech/st4505/protocol
id: st4505-protocol
sidebar_label: Protocol
title: Suntech - ST4505 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for Suntech ST4505 integration with Plaspy covering connection settings and compatibility guidance
keywords:
  - Suntech ST4505 protocol
  - Suntech ST4505 GPS protocol
  - Suntech ST4505 communication protocol
  - Suntech ST4505 tracking protocol
  - ST4505 Plaspy compatibility
  - ST4505 OBD II tracker
  - Suntech GPS tracker protocol
  - vehicle telematics ST4505
  - fleet tracking ST4505
  - Plaspy device protocol
---

# Suntech - ST4505 Protocol

This page documents the public protocol context for using the Suntech ST4505 GPS OBD-II tracker with Plaspy. It summarizes how the tracker communicates in general terms, what role the reporting protocol plays in delivering GNSS fixes, OBD telemetry and sensor events, and which Plaspy connection settings are used for device integration. This guidance is intended for technical implementers and fleet administrators setting up ST4505 devices to report to the Plaspy backend.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when an ST4505 is configured to report to the Plaspy endpoint. Exact protocol behavior and available messages can vary by ST4505 firmware version, hardware revision, and manufacturer implementation, so the information below focuses on public, non sensitive protocol context and practical compatibility notes rather than device internals.

## Protocol Overview

The communication protocol is the agreed method the ST4505 uses to present GNSS position, OBD-II telemetry, and sensor events to a backend service such as Plaspy. It enables the device to identify itself, report location and vehicle data, and send event notifications that Plaspy translates into real time tracking, alerts, and historical records.

- Carries GNSS fixes and movement events needed for location tracking and geofencing workflows.
- Transports OBD-II telemetry and diagnostic indicators so Plaspy can surface vehicle status and maintenance triggers.
- Conveys device identity and health information so Plaspy can correlate streams to the correct vehicle and account.
- Delivers event driven messages such as crash, ignition on/off, and accelerometer derived harsh events for immediate alerts.
- Supports configurable reporting intervals and event thresholds to balance responsiveness and cellular data usage.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a common public endpoint and automatically identifies the tracker protocol used by an incoming device stream. When the ST4505 reports to the Plaspy endpoint with correct network and server settings, manual protocol selection inside Plaspy is generally not required.

- Plaspy listens on the shared server address d.plaspy.com and the public server IP 54.85.159.138.
- Plaspy accepts incoming device connections on port 8888 and uses that same port for all supported devices.
- Devices can be configured to use either UDP or TCP to report to Plaspy on port 8888 depending on device firmware and operator preference.
- If the ST4505 is pointed to the Plaspy endpoint and cellular connectivity is working, Plaspy will automatically detect the protocol and begin ingesting location and telemetry streams.
- Typical setup steps are configuring the device APN, setting the Plaspy server address, and ensuring the device transport mode matches network capabilities.

## Transport and Connection Context

Connection transport and addressing determine how the ST4505 reaches the Plaspy backend but do not change the high level purpose of the protocol. The device may use UDP or TCP on the shared Plaspy port, and it can point to the Plaspy domain or the public IP depending on provisioning needs.

- Devices may be set to report to d.plaspy.com or to the numeric address 54.85.159.138.
- The device may use UDP or TCP on port 8888 based on firmware options and network behavior.
- All Plaspy devices use the same port number 8888 for reporting to reduce configuration complexity.
- Cellular mode (for example LTE Cat M1, NB‑IoT or 2G fallback) can influence how the device manages sessions and retransmission but does not change the public connection endpoint.
- Ensure network firewalls and NAT rules allow outbound connections to the Plaspy endpoint on port 8888 for the chosen transport protocol.

## Protocol Compatibility Notes

- Firmware variations across ST4505 units can change which telemetry fields are sent and how often, so verify the firmware release notes for device behavior.
- Hardware revisions and optional variants such as ST4505T and ST4505DO may add Bluetooth sensors or jamming detection which alter the set of events reported to Plaspy.
- Transport selection (UDP versus TCP) may affect message delivery characteristics on unreliable cellular links; choose the mode best supported by the device firmware and carrier.
- Vehicle OBD-II PID availability depends on the vehicle make and model; not all telemetry fields will be present on every vehicle.
- Always cross check device configuration examples against current manufacturer documentation before large scale deployments.
- Testing a sample device end to end with Plaspy is recommended prior to fleet rollout to validate expected telemetry and event behavior.

## Why Protocol Understanding Matters

Understanding the ST4505 communication protocol helps ensure a smooth setup, faster troubleshooting, and consistent telemetry quality once devices are deployed at scale. Knowledge of what the device reports and how it connects to Plaspy reduces time to resolution when messages are missing or events behave differently than expected.

- Speeds initial configuration by aligning device server settings with Plaspy connection requirements.
- Helps diagnose connectivity issues by clarifying whether transport, DNS, or cellular mode is the root cause.
- Enables tuning of reporting intervals and event thresholds to balance real time needs and data costs.
- Clarifies which OBD-II metrics can be expected from a given vehicle and firmware combination.
- Supports predictable OTA or maintenance planning by understanding how devices report status during upgrades.

## Why Use Plaspy with This Protocol

Using the Suntech ST4505 with Plaspy provides a practical path to combine accurate GNSS tracking, vehicle diagnostics from the OBD-II port, and sensor driven eventing into fleet workflows. The plug and play OBD-II form factor and multi network cellular support make the ST4505 a convenient option for operators seeking rapid installation and continuous telemetry.

Plaspy’s shared connection endpoint and automatic protocol detection simplify device onboarding. To learn more about Plaspy and how it works with devices like the ST4505 visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer details can change over time, so please verify the latest device specific protocol information and firmware notes on the official manufacturer site http://www.suntechint.com/.
