---
slug: /sentar/d39/protocol
id: d39-protocol
sidebar_label: Protocol
title: Sentar - D39 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Sentar D39 GPS smartwatch and how it communicates with Plaspy for tracking and alerts
keywords:
  - Sentar D39 protocol
  - Sentar D39 GPS protocol
  - Sentar D39 communication protocol
  - Sentar D39 tracking protocol
  - Sentar D39 Plaspy compatibility
  - Sentar GPS smartwatch protocol
  - Plaspy device protocol
  - GPS tracker protocol
  - children's GPS watch protocol
  - wearable tracker protocol
---

# Sentar - D39 Protocol

This page describes the public protocol context for using the Sentar D39 smartwatch with Plaspy. It focuses on how the device communicates with Plaspy for position and status reporting, emergency alerts, and basic telemetry that Plaspy ingests for real time tracking and monitoring. The D39 is a Plaspy compatible 4G GPS smartwatch designed for children with multi mode positioning, SOS and two way communication, and companion app support; this document treats those capabilities from a connectivity and protocol perspective rather than examining proprietary internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. The D39 may be configured to report to d.plaspy.com or the Plaspy server IP 54.85.159.138 using port 8888, and the device can use either UDP or TCP on that port depending on its configuration. All devices in Plaspy use the same port and Plaspy will attempt automatic protocol detection, while exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The D39 device protocol defines how the watch packages identification, location fixes, status updates, and alert events for delivery to a remote server such as Plaspy. For Plaspy integration the protocol's public behavior determines what data is available for map display, alerts, history, and basic telemetry without exposing manufacturer private internals.

- Provides device identification and session information so Plaspy can associate reports with an account and a specific D39 unit.
- Carries location data derived from GPS, AGPS, LBS, and WiFi for Plaspy to normalize and display on maps and reports.
- Conveys event notifications such as SOS presses, low battery warnings, and periodic heartbeats used by Plaspy for alerting and status monitoring.
- Delivers basic telemetry useful to Plaspy dashboards such as battery level and connectivity status to support uptime and care workflows.
- Supports two way communication signaling metadata that helps correlate voice or app interactions with location and events in Plaspy.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port for incoming device reports and applies automatic detection to identify the tracker protocol in use. When a D39 is configured to send data to the Plaspy endpoint, the platform will recognize the device behavior and map incoming reports to the appropriate ingestion pipeline without requiring users to manually select a protocol inside Plaspy.

- Devices should be pointed to d.plaspy.com or the IP address 54.85.159.138 to reach the Plaspy ingestion endpoint.
- The common port for all Plaspy supported devices is 8888 and Plaspy expects D39 reports on that port.
- D39 units may use either UDP or TCP to send reports; Plaspy accepts both transports on the shared port.
- In most deployments the user configures the watch to report to the Plaspy endpoint and Plaspy handles protocol identification automatically.
- If a device is not detected correctly, checking device configuration, firmware, and the target endpoint is the normal first step.

## Transport and Connection Context

Connection details are a critical part of reliable reporting from the D39 into Plaspy. The watch uses cellular data to reach the Plaspy servers and can be set to communicate over UDP or TCP depending on device software and chosen configuration. Correct transport selection and server addressing ensure the device can reach Plaspy and maintain timely updates.

- The D39 can be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- Plaspy accepts device reports at d.plaspy.com or directly at 54.85.159.138 on port 8888.
- All Plaspy supported devices share the same port, simplifying firewall and APN configuration for deployments.
- TCP may provide session persistence while UDP can be lighter weight for periodic reporting, depending on device settings.
- Ensure mobile operator APN and any network firewalls allow outbound connections to the Plaspy endpoint and port for consistent delivery.

## Protocol Compatibility Notes

- Firmware changes can alter message timing, available fields, or transport behavior; always confirm firmware release notes for device specific changes.
- Hardware revisions or regional variants of the D39 may behave differently with respect to supported bands or auxiliary features.
- Manufacturer side configuration or companion app settings may affect whether the device uses UDP or TCP and which server address is applied.
- Some features such as indoor floor hints or assisted positioning depend on multi mode data and may vary by deployment and firmware.
- Validate the device configuration points to d.plaspy.com or 54.85.159.138 and uses port 8888 to ensure Plaspy receives reports.
- For critical or large deployments, perform device testing to confirm the D39 behaves as expected with your Plaspy account and workflows.

## Why Protocol Understanding Matters

Knowing how the D39 communicates helps installers and administrators achieve stable reporting, meaningful alerts, and reliable history in Plaspy. Understanding the communication context makes setup faster and troubleshooting more effective when reports are missing or events are not appearing on the platform.

- Enables correct network and APN configuration so the device can reach Plaspy reliably.
- Helps diagnose whether missing updates are due to transport issues, configuration, or device firmware.
- Clarifies which telemetry and events the watch will provide to Plaspy for use in alerts and dashboards.
- Supports planning for deployments that combine wearables with vehicle trackers by understanding data cadence and capabilities.
- Improves long term reliability by guiding firmware management and compatibility validation.

## Why Use Plaspy with This Protocol

Using the Sentar D39 with Plaspy gives parents, caregivers, and administrators a consolidated view of wearable device location and status alongside other tracked assets. Plaspy normalizes the D39 position and event reports for real time map display, geo fence alerts, SOS handling, and history retention so operators can maintain situational awareness without managing per device protocol details.

If you want to learn more about how Plaspy works with compatible trackers and to explore features for monitoring and alerts, visit https://www.plaspy.com. Protocol support and device behavior can change as manufacturers update firmware and hardware, so please verify the latest device specific protocol and firmware details on the manufacturer site http://www.sentarsmart.com/ before deployment.
