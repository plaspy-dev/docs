---
slug: /oigo_telematics/ar_3hu/protocol
id: ar_3hu-protocol
sidebar_label: Protocol
title: Oigo Telematics - AR-3HU Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Oigo Telematics AR-3HU GPS tracker and Plaspy integration
keywords:
  - Oigo Telematics AR-3HU protocol
  - AR-3HU GPS protocol
  - Oigo AR-3HU Plaspy
  - AR-3HU communication protocol
  - AR-3HU tracking protocol
  - Oigo Telematics GPS tracker protocol
  - Plaspy device compatibility
  - fleet tracking AR-3HU
  - vehicle tracker AR-3HU integration
  - AR-3HU event reporting
---

# Oigo Telematics - AR-3HU Protocol

This page covers the public protocol context for using the Oigo Telematics AR-3HU tracker with Plaspy. It explains how the tracker communicates at a high level, how Plaspy receives and recognizes tracker data, and what aspects of the communication are most important when integrating the device into fleet monitoring or stolen vehicle recovery workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. The AR-3HU is a discreetly installable 3G HSDPA tracker with a broad set of event reports and alerts, and this documentation focuses on public, non-sensitive protocol context that helps with setup and troubleshooting.

## Protocol Overview

The AR-3HU communication protocol defines how the device reports location, status, and event alerts to a remote platform. In the context of Plaspy, the protocol's role is to ensure the AR-3HU can identify itself, deliver timely telemetry, and convey event conditions in a format that Plaspy can interpret automatically.

- Enables the tracker to send periodic location and status updates to Plaspy for real time visibility.
- Carries event reports such as speeding, harsh braking, and unauthorized use so Plaspy can raise alerts.
- Allows the device to include identity and configuration markers so the receiving platform can associate messages with a specific vehicle.
- Supports transport over common network sockets so the AR-3HU can communicate from cellular networks to the Plaspy endpoint.
- Provides sufficient context for Plaspy to display telemetry and integrate the device into fleet workflows without manual protocol selection.

## How Plaspy Detects the Protocol

Plaspy accepts incoming reports on a shared endpoint and automatically detects the tracker protocol when a properly configured device reports to the service. In most cases the device only needs to be pointed at the Plaspy endpoint and use the correct transport to be recognized and processed.

- Plaspy uses a single listening endpoint at d.plaspy.com and the IP 54.85.159.138 on port 8888 for device reporting.
- All devices in Plaspy use the same port, simplifying device configuration across different tracker models.
- Plaspy automatically detects the tracker protocol so users typically do not need to select a protocol manually inside the platform.
- If the AR-3HU is configured to report to the Plaspy endpoint, Plaspy will identify incoming reports and map them to device records when device identity details are included in messages.
- Proper device configuration and up to date firmware help ensure that protocol messages include the fields Plaspy expects for reliable automatic detection.

## Transport and Connection Context

Connection context describes how the AR-3HU reaches Plaspy over the cellular network. The device supports common transport options and can be pointed to Plaspy either by domain name or by IP address, depending on installer preference and network constraints.

- Devices may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct addressing.
- The port used for reporting is 8888 and Plaspy uses the same port for all supported devices.
- Choice of UDP or TCP affects delivery characteristics such as ordering and retransmission, so select the transport mode the AR-3HU firmware supports and that best fits your network.
- Ensure APN and cellular connectivity are configured correctly on the device so it can reach d.plaspy.com or 54.85.159.138 on port 8888.

## Protocol Compatibility Notes

- Compatibility can vary by AR-3HU firmware version; newer firmware may add or change fields and event reporting behavior.
- Hardware revisions or optional accessories may affect available I/O or event types reported to the platform.
- Manufacturer-side configuration options can change how the device identifies itself or which events it reports, so check settings before deployment.
- Selecting UDP versus TCP when configuring the device can influence message delivery behavior; match transport to what the installed firmware supports.
- Test a small number of devices after configuration to confirm Plaspy is receiving and interpreting reports as expected.
- Always validate compatibility details against the device documentation supplied by the manufacturer for the specific firmware and hardware revision.

## Why Protocol Understanding Matters

Understanding the communication protocol helps installers and operators set up devices correctly, troubleshoot connectivity issues, and maintain reliable data flows to Plaspy for long term operations.

- Speeds setup by ensuring devices are pointed to the correct Plaspy endpoint and transport is configured properly.
- Improves troubleshooting by clarifying whether an issue is network, transport, or device configuration related.
- Helps set expectations for what event types and reporting cadence the AR-3HU will provide to Plaspy.
- Aids firmware and device lifecycle planning by highlighting when protocol changes might require configuration updates.
- Supports reliable mapping of device identity to vehicle records so Plaspy can present accurate telemetry and alerts.

## Why Use Plaspy with This Protocol

Using the AR-3HU with Plaspy provides a practical path for organizations that need consistent vehicle visibility, event-driven alerts, and centralized fleet oversight. The AR-3HU's discreet installation and event reporting capabilities pair with Plaspy's automatic protocol detection and unified port strategy to reduce configuration overhead during deployment.

If you need more information about how Plaspy works with the AR-3HU or want to evaluate deployment options for a fleet, learn more about Plaspy at https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance, verify information on the Oigo Telematics website https://www.oigotelematics.com/ since protocol support and firmware behavior can change over time.
