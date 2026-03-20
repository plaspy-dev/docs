---
slug: /cantrack/gf20_mini/protocol
id: gf20_mini-protocol
sidebar_label: Protocol
title: CanTrack - GF20-Mini Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the CanTrack GF20 Mini and how it communicates with Plaspy for reliable asset tracking and alerts
keywords:
  - CanTrack GF20 Mini protocol
  - CanTrack GF20 Mini GPS protocol
  - GF20 Mini tracking protocol
  - GF20 Mini Plaspy compatibility
  - CanTrack GPS protocol overview
  - GF20 Mini communication protocol
  - Plaspy device integration
  - Asset tracker protocol guide
  - Vehicle tracker GF20 Mini
  - Magnetic GPS tracker protocol
---

# CanTrack - GF20-Mini Protocol

This page provides a public protocol overview for using the CanTrack GF20‑Mini with the Plaspy platform. It focuses on high level communication context, how the device reports location and events, and what to expect when integrating the GF20‑Mini into a Plaspy fleet or asset monitoring workflow.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior, available commands, and message timing can vary by firmware version, hardware revision, and manufacturer implementation, so this page gives practical, non sensitive context while encouraging verification against manufacturer documentation.

## Protocol Overview

The tracker protocol defines how the GF20‑Mini conveys location, status, and event information to a remote server like Plaspy. For Plaspy users the most relevant aspects are how the device identifies itself, how position and alert events are reported, and how the device can operate when cellular connectivity is intermittent.

- Facilitates periodic and event driven location reports from the GF20‑Mini to a remote endpoint for real time monitoring.
- Carries status messages such as battery level, vibration alarm, geo‑fence triggers, and stored position synchronization after outages.
- Enables Plaspy to receive usable telemetry without requiring users to manage low level packet formats or parser settings.
- Supports backup storage of positions on the device so historical data is preserved during GSM outages and sent when connection returns.
- Allows optional channels such as SMS or platform reporting to be used alongside server reporting for alerts and remote configuration.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared server endpoint and port, then automatically determines the tracker protocol based on the incoming data pattern. In most cases a GF20‑Mini device that has been configured to report to Plaspy will be detected and processed without manual protocol selection inside the platform.

- Plaspy accepts device reports at the public domain d.plaspy.com and the public IP address 54.85.159.138.
- All devices in Plaspy use the same port, which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol so users generally do not need to select a protocol manually in the platform.
- Proper device configuration to point reporting to the Plaspy endpoint is the typical requirement to enable automatic detection.
- If a device does not appear, checking network addressing, transport selection, and firmware reporting settings is the recommended first step.

## Transport and Connection Context

The GF20‑Mini can report to a remote endpoint using common transport protocols depending on device support and configuration. When configuring the GF20‑Mini for Plaspy, point the device to the Plaspy endpoint and use the supported transport that matches the device firmware.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and chosen configuration.
- Plaspy listens for device connections on port 8888 and the same port is reused for all supported devices.
- Devices can be pointed to the domain d.plaspy.com or directly to the IP address 54.85.159.138 when DNS is not available.
- Use the transport mode (UDP or TCP) that the GF20‑Mini firmware supports and that matches your network environment.
- Ensure outbound cellular data is permitted for the chosen transport and that APN or SIM settings are correct for reliable delivery.

## Protocol Compatibility Notes

- Firmware revisions can change reporting formats, message frequency, and available features; check the device firmware version when troubleshooting.
- Hardware revisions or variant models may alter available inputs or optional features such as remote audio or additional sensor support.
- Some installation workflows rely on SMS based configuration or platform reporting; confirm which configuration channels the specific GF20‑Mini unit supports.
- Transport choice matters for reliability and latency tradeoffs; UDP may be lighter weight while TCP provides connection assured delivery for some events.
- Manufacturer side settings or region specific firmware can lead to differences in behaviour; validate against official docs for site specific deployments.
- Always confirm device behavior during a staging test before wide scale deployment to Plaspy.

## Why Protocol Understanding Matters

Understanding the communication protocol helps administrators and integrators set up devices correctly, diagnose issues, and ensure consistent data flow into Plaspy for operational use. Even without needing low level detail, a practical grasp of reporting modes, transport, and firmware variation makes onboarding faster and more reliable.

- Helps confirm the GF20‑Mini is pointed at the correct Plaspy endpoint and transport mode so data appears in the platform.
- Aids in troubleshooting connectivity issues such as missing reports, delayed events, or incomplete telemetry after GSM outages.
- Informs choices about reporting intervals and power management to balance battery life against tracking timeliness.
- Clarifies expectations around which events and telemetry types the device will forward to Plaspy.
- Supports planning for staged rollouts where firmware or hardware variations exist across a device fleet.

## Why Use Plaspy with This Protocol

Using the GF20‑Mini with Plaspy provides a practical path to consolidate location, geo‑fence alerts, and event notifications for asset and vehicle monitoring. The GF20‑Mini form factor and onboard features such as magnetic mounting, vibration alarms, and onboard memory make it well suited for discreet deployments where centralized visibility is required.

Plaspy simplifies device onboarding by exposing a single endpoint and port for all supported trackers and by automatically detecting the incoming tracker protocol. To learn more about Plaspy and how it can centralize GF20‑Mini reporting and events visit https://www.plaspy.com. For the most current device specific protocol and firmware details verify the manufacturer information at https://www.cantrackgps.com/ since protocol support and firmware behavior can change over time.
