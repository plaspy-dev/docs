---
slug: /jointech/jt701/protocol
id: jt701-protocol
sidebar_label: Protocol
title: Jointech - JT701 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the Jointech JT701 GPS tracker with Plaspy including connection context and compatibility guidance
keywords:
  - Jointech JT701 protocol
  - Jointech JT701 GPS protocol
  - JT701 Plaspy compatibility
  - JT701 communication protocol
  - Jointech tracker protocol
  - JT701 tracking protocol
  - Jointech GPS tracker Plaspy
  - JT701 asset tracking
  - GPS tracker protocol guide
  - vehicle tracking JT701
---

# Jointech - JT701 Protocol

This page summarizes the public protocol context for using the Jointech JT701 intelligent tracking lock with the Plaspy platform. It focuses on how the device reports location, status, and security events to Plaspy at a connection level so integrators and fleet managers understand how data flows into the platform without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is reporting to the Plaspy endpoint. Exact protocol behavior and message details can vary by firmware version, hardware revision, and manufacturer implementation, so device configuration and manufacturer documentation remain important for edge cases and firmware specific features.

## Protocol Overview

The JT701 reporting protocol is the mechanism the device uses to identify itself to Plaspy and to transmit GPS, status, and event telemetry over the cellular link. On a high level, the protocol enables the tracker to deliver position and security-related events that Plaspy consumes for live tracking, alerts, and history.

- Allows the JT701 to deliver GPS coordinates, timestamped events, and device status to Plaspy for visualization and reporting.
- Transmits tamper and illegal unlocking alerts plus access log events that are mapped into Plaspy alerts and histories.
- Provides device identity and health information so Plaspy can associate incoming data with the correct asset record.
- Enables periodic and event driven reporting so Plaspy receives both routine telemetry and immediate alarms.
- Operates over standard IP transport to reach the Plaspy ingest endpoint and be available for automated processing.

## How Plaspy Detects the Protocol

Plaspy receives device connections on a shared endpoint and port and automatically determines the tracker protocol used by the device when telemetry arrives. For most JT701 deployments the integrator does not need to select a protocol inside Plaspy provided the device is configured to report to Plaspy's endpoint.

- Plaspy listens on a single standardized port for all supported devices, simplifying device configuration and onboarding.
- When a JT701 reports to the Plaspy endpoint, the platform inspects the available device identifiers and message patterns to match the appropriate handling routine.
- Users typically configure the JT701 to report to d.plaspy.com or the equivalent Plaspy server address and do not need to manually specify a protocol in the platform.
- Automatic detection reduces setup friction and helps new devices appear in Plaspy without additional protocol selection steps.
- If a device uses a nonstandard firmware behavior, validating settings against manufacturer documentation can resolve any detection issues.

## Transport and Connection Context

The JT701 communicates over the cellular network and can be configured to use either UDP or TCP transport to send telemetry to Plaspy depending on device support and configuration choices. For connectivity, devices should target the Plaspy server and port that Plaspy uses for device ingestion.

- Plaspy's public server domain for device reporting is d.plaspy.com for DNS based configuration.
- Plaspy's public server IP is 54.85.159.138 and can be used in environments where a direct IP is required.
- The Plaspy ingest port used by all devices is 8888 and is the same across the platform for simpler provisioning.
- The JT701 may be configured to use UDP or TCP on port 8888 depending on its firmware and provisioning method.
- Use the transport method supported by the device and allowed by the mobile network operator to ensure reliable uplink.

## Protocol Compatibility Notes

- Firmware versions can introduce differences in message timing, fields, or optional event types that affect how a JT701 communicates with Plaspy.
- Hardware revisions or regional variants may alter supported transport modes or feature sets that influence compatibility.
- Manufacturer configuration parameters such as APN, reporting intervals, and alarm thresholds will affect the telemetry Plaspy receives.
- Choosing UDP versus TCP affects delivery characteristics and should match the JT701 firmware capabilities and operator network conditions.
- Plaspy's automatic detection covers typical JT701 reporting modes but verifying device settings is recommended when onboarding.
- Confirm behavior for security related events such as tamper and unlock logging against current manufacturer notes.

## Why Protocol Understanding Matters

Understanding the JT701 communication protocol helps teams set up devices correctly, diagnose connectivity or reporting gaps, and ensure the security and reliability of fleet telemetry within Plaspy. Clear expectations about what the device will report and how it connects reduce onboarding time and support overhead.

- Faster setup by aligning JT701 reporting parameters with Plaspy connection settings from the start.
- More effective troubleshooting when connectivity or missing events are traced to transport or configuration mismatches.
- Better alert tuning by knowing which device events are natively reported and which require firmware configuration.
- Improved maintenance planning based on device health and battery reporting behavior that the protocol exposes.
- Greater operational confidence when security events such as tamper alerts and access logs arrive consistently.

## Why Use Plaspy with This Protocol

Pairing the JT701 with Plaspy gives organizations a streamlined way to combine secure access control telemetry with location and event reporting. Plaspy ingests the JT701 data feed and presents it in real time for mapping, alert workflows, and audit-ready history so operations teams can monitor custody, detect unauthorized access, and respond quickly.

Plaspy uses a single port and shared endpoint model to simplify device provisioning while automatically detecting the tracker protocol once the JT701 is reporting to the platform. To learn more about Plaspy and the broader platform capabilities visit https://www.plaspy.com. For the most current and device specific protocol and firmware details please verify information with the manufacturer at https://www.jointcontrols.com/ since protocol support and firmware behavior can change over time.
