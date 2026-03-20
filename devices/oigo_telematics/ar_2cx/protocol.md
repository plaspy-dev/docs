---
slug: /oigo_telematics/ar_2cx/protocol
id: ar_2cx-protocol
sidebar_label: Protocol
title: Oigo Telematics - AR-2CX Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for using the Oigo Telematics AR-2CX with Plaspy including transport details and integration considerations
keywords:
  - Oigo Telematics AR-2CX protocol
  - AR-2CX GPS protocol
  - AR-2CX tracking protocol
  - Oigo Telematics protocol Plaspy
  - AR Series tracker protocol
  - vehicle tracking AR-2CX
  - AR-2CX event reporting
  - fleet tracking compatibility
  - GPS tracker communication
  - Plaspy device protocol
---

# Oigo Telematics - AR-2CX Protocol

This page provides a public, non-sensitive overview of the AR-2CX tracker communication context when used with Plaspy. It explains how the device generally reports location and events to Plaspy and what to consider when configuring the tracker to work with the platform.

The AR-2CX is part of Oigo Telematics AR Series, designed for fleet management and stolen vehicle recovery with flexible event reporting and discreet installation options. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker communication protocol defines how the AR-2CX formats and transmits position, status, and event information to a remote server such as Plaspy. This page focuses on the public aspects of that communication: how to point the device to Plaspy, what transport options are expected, and which operational factors commonly affect integration.

- The protocol enables the tracker to report GPS location, timestamps, and telemetry that Plaspy uses for mapping and analysis.
- Event and alert reports such as speeding, harsh braking, and unauthorized use are carried as part of the device reporting so Plaspy can generate notifications and history.
- A device identifier or serial is included in reports so Plaspy can associate incoming data with a specific AR-2CX unit.
- Reporting intervals, motion based reporting, and event triggers are typically configurable on the device and influence how often data is sent to Plaspy.
- The protocol allows both periodic position updates and ad hoc event messages so systems can reconcile state and history for each asset.

## How Plaspy Detects the Protocol

Plaspy provides a single shared endpoint that all supported devices can report to. When an AR-2CX is configured to send data to Plaspy, the platform matches incoming traffic to a compatible protocol and associates the device with a Plaspy account automatically in most cases.

- Plaspy server endpoint is d.plaspy.com and the equivalent public server IP is 54.85.159.138.
- The listening port used by Plaspy is 8888 and Plaspy uses the same port for all supported devices.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and setup.
- Plaspy automatically detects the tracker protocol when traffic arrives at the shared endpoint; manual selection of protocol inside Plaspy is generally not required for properly configured devices.
- Proper device identification in reports (unique ID or serial) is essential for Plaspy to match a tracker to an account and begin processing location and event data.

## Transport and Connection Context

Transport choice and connection settings determine how AR-2CX messages reach Plaspy. Device configuration should point to the Plaspy endpoint and use a supported transport consistent with the device firmware and installation.

- The AR-2CX may be configured to use either UDP or TCP on port 8888; choose the transport supported by your device firmware and network environment.
- Devices can be pointed to the hostname d.plaspy.com or directly to 54.85.159.138 when DNS or routing constraints require an IP address.
- Plaspy’s single port approach simplifies configuration because all devices report to port 8888 regardless of model.
- Cellular networks, NAT, and operator firewalls can affect delivery; confirming the device can reach d.plaspy.com or the server IP on port 8888 is a useful troubleshooting step.
- When switching transport modes, validate that the AR-2CX firmware and any intermediate networking equipment allow the selected protocol to pass.

## Protocol Compatibility Notes

- Firmware variations across AR-2CX units may change the exact messages and available event types; verify firmware release notes when possible.
- Hardware revisions or optional accessories can affect which events or telemetry fields are reported.
- Manufacturer-side configuration menus or provisioning tools may offer options that alter reporting behavior or transport selection.
- Transport choice (UDP vs TCP) is determined by device support and network reliability requirements; choose the one that matches your deployment constraints.
- Discreet installation and antenna placement can influence GPS performance and event triggering; this impacts the data Plaspy receives.
- Validate compatibility against the latest Oigo Telematics documentation for model specific details before large scale deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a smooth initial setup and reliable ongoing operations with Plaspy. Even with automatic detection and shared endpoints, practical knowledge of how the tracker reports and what it sends is valuable for troubleshooting and configuration.

- It helps determine correct device settings for transport, reporting intervals, and event filters.
- Knowing what events the AR-2CX can generate makes alert configuration in Plaspy more effective.
- Understanding identification fields in reports reduces onboarding friction when matching devices to accounts.
- Awareness of firmware and hardware differences prevents unexpected behavior during upgrades or model changes.
- It streamlines troubleshooting when messages fail to arrive or appear malformed at the Plaspy endpoint.

## Why Use Plaspy with This Protocol

Using the AR-2CX with Plaspy provides a centralized way to monitor vehicles, receive event alerts, and retain historical location data for fleet management and recovery workflows. The AR-2CX’s support for event reporting and discreet installation pairs well with Plaspy’s centralized processing and alerting capabilities to deliver operational visibility.

To learn more about integrating trackers like the AR-2CX with Plaspy, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and installation guidance consult the manufacturer at https://www.oigotelematics.com/ since protocol support and firmware behavior can change over time and should be verified with official manufacturer information.
