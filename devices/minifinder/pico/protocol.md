---
slug: /minifinder/pico/protocol
id: pico-protocol
sidebar_label: Protocol
title: MiniFinder - Pico Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for MiniFinder Pico integration with Plaspy for reliable tracking and alarm reporting
keywords:
  - MiniFinder Pico protocol
  - Pico GPS protocol
  - MiniFinder Pico Plaspy compatibility
  - Pico communication protocol
  - MiniFinder tracking protocol
  - GPS tracker integration Pico
  - real time tracking Pico
  - asset tracking Pico
  - personal safety tracker Pico
  - Plaspy device protocol
---

# MiniFinder - Pico Protocol

This page describes the public protocol context for using the MiniFinder Pico with Plaspy. It explains how the device communicates in broad terms, what to expect when pointing a Pico device at Plaspy, and how the communication protocol enables telemetry and event delivery into Plaspy without exposing private implementation details.

MiniFinder Pico is a compact personal safety and small asset tracker with GNSS positioning, SOS and motion/fall alarms. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by Pico firmware version, hardware revision and the manufacturer's implementation, so this page focuses on public, non-sensitive protocol context and practical integration guidance.

## Protocol Overview

The Pico tracker uses its onboard communications stack to report location, alerts and state to a remote server. The device protocol governs how the tracker identifies itself, how events are represented for delivery, and how periodic location reports are transmitted so that Plaspy can ingest and display actionable telemetry.

- Enables transmission of GNSS position fixes and timestamps so Plaspy can map real time and historical locations.
- Carries event reports such as SOS presses, fall detection, geofence triggers, motion changes and low battery states.
- Provides device identity and basic status information so Plaspy can associate incoming data with the correct Pico unit.
- Supports both periodic reporting and event-driven messages to balance timely alerts with battery life.
- Works over standard IP transport so devices can report directly to the Plaspy server endpoint.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for incoming device reports and automatically detects the tracker protocol for supported devices. When Pico is configured to send its reports to the Plaspy endpoint, Plaspy identifies the device type and parses incoming messages so users generally do not need to choose a protocol manually inside the platform.

- Plaspy’s server endpoint is d.plaspy.com and is reachable at 54.85.159.138.
- All devices supported by Plaspy use the same port, which simplifies device configuration and server routing.
- Plaspy automatically detects the tracker protocol when a properly configured device reports to the platform.
- In most cases you only need to set the device to report to Plaspy’s endpoint and ensure the correct transport and APN settings on the SIM.
- Proper device identity and a compatible firmware build on the Pico help Plaspy reliably recognize and process reports.

## Transport and Connection Context

Pico devices can be configured to use either UDP or TCP depending on device firmware and configuration options. Connection context determines how reports are delivered to Plaspy and influences reliability and battery usage; choose the transport that matches your deployment needs and Pico configuration capabilities.

- Devices may use UDP or TCP to send reports to port 8888 on the Plaspy endpoint.
- Pico units can be configured to point at d.plaspy.com or the numeric server address 54.85.159.138.
- Plaspy uses the same port for all supported devices, so configuring port 8888 is standard across deployments.
- Transport selection (UDP vs TCP) is determined by the device settings and network environment.
- Ensure the device SIM profile and APN allow outbound connections on the chosen transport and that any network firewalls permit traffic to the Plaspy endpoint.

## Protocol Compatibility Notes

- Pico is compatible with Plaspy when the device is configured to report to the Plaspy endpoint and uses supported firmware behavior.
- Firmware versions and hardware revisions can change the exact message timing and available event types; verify firmware release notes for device-specific details.
- Manufacturer configuration menus, APN settings, and SIM provisioning can affect whether reports reach the Plaspy server.
- Transport choice (UDP or TCP) may impact delivery reliability and battery consumption; validate the best option for your use case.
- Manufacturer-side cloud or management platforms may introduce proprietary features; confirm whether those features affect direct reporting to Plaspy.
- Always validate compatibility for large rollouts by testing a sample device with Plaspy before full deployment.

## Why Protocol Understanding Matters

Understanding how the Pico communicates with Plaspy helps installers and administrators configure devices correctly, diagnose connectivity issues, and optimize reporting for battery life and alert timeliness. Clear protocol context reduces time to first fix and improves operational reliability.

- Ensures devices are pointed to the correct Plaspy endpoint and using the proper transport and port.
- Helps troubleshoot missing telemetry by checking SIM, APN, transport, and endpoint configuration.
- Guides selection of reporting intervals and event settings to balance battery life with monitoring needs.
- Clarifies how event types from Pico map to Plaspy alerts and notifications for operators.
- Aids in planning firmware updates and hardware rollouts by identifying which changes may affect integration.

## Why Use Plaspy with This Protocol

Using MiniFinder Pico with Plaspy lets organizations add compact, wearable GPS tracking and SOS functionality into a centralized monitoring and incident management workflow. Pico’s compact form factor, GNSS accuracy and event reporting capabilities make it well suited for personal safety, vulnerable person monitoring, and small asset protection when paired with a platform that can ingest and act on those events.

To learn more about how Plaspy can manage Pico devices and integrate location and alerting into your operations, visit https://www.plaspy.com. For the latest device specific protocol details, firmware information and manufacturer guidance verify current documentation at https://minifinder.se/.
