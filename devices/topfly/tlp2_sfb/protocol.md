---
slug: /topfly/tlp2_sfb/protocol
id: tlp2_sfb-protocol
sidebar_label: Protocol
title: TopFly - TLP2-SFB Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for TopFly TLP2 SFB integration with Plaspy for tracking and telemetry
keywords:
  - TopFly TLP2 SFB protocol
  - TopFly TLP2 SFB GPS protocol
  - TopFly TLP2 SFB communication protocol
  - TopFly TLP2 SFB tracking protocol
  - TLP2 SFB Plaspy compatibility
  - Plaspy device protocol
  - asset tracker protocol TopFly
  - GPS tracker Plaspy integration
  - cold chain telemetry TopFly
  - solar powered tracker protocol
---

# TopFly - TLP2-SFB Protocol

This page describes the public protocol context for using the TopFly TLP2-SFB tracker with Plaspy. It focuses on the observable communication methods and connection settings that enable the device to report location and sensor telemetry into Plaspy without detailing private or firmware internals.

The TLP2-SFB is a solar assisted heavy duty asset tracker built for containers trailers and trucks, with large onboard buffering and BLE sensor support for temperature humidity and door status. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, though exact runtime behavior can vary by firmware revision hardware variant and manufacturer implementation.

## Protocol Overview

The tracker communicates location and telemetry using standard transport methods supported by the device and accepted by Plaspy. The protocol's role is to ensure the tracker can identify itself send position and sensor records and allow Plaspy to ingest those records reliably for real time tracking and historical reporting.

- Enables the TLP2-SFB to stream location updates and telemetry into Plaspy using supported transports such as TCP UDP MQTT and SMS where available.
- Provides identifiers and telemetry fields that allow Plaspy to associate incoming messages with a specific device and account.
- Supports buffering on the device so historical points collected during outage periods are uploaded to Plaspy when connectivity resumes.
- Carries BLE sensor data for external temperature humidity and door sensors so Plaspy can include environmental telemetry alongside GPS points.
- Facilitates event reporting such as movement start stop parking and tamper or removal alerts that Plaspy can convert into notifications and rules.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a common endpoint and automatically determines the reporting protocol for each device so manual protocol selection in the platform is normally unnecessary. Proper device configuration to point at the Plaspy endpoint ensures the platform can match incoming reports to the TLP2-SFB and begin ingesting data.

- Plaspy accepts connections at the public endpoint d.plaspy.com and the same service is available at IP 54.85.159.138 for direct routing.
- All devices supported by Plaspy use the same port which simplifies device configuration and reduces setup errors.
- The platform automatically detects the tracker protocol when the device is properly configured to report to the Plaspy endpoint so users typically do not need to pick a protocol manually.
- If a device supports multiple transports the device can be configured to use the transport best suited to the deployment and Plaspy will ingest reports from that transport.
- Verify device reporting settings and manufacturer guidance if automatic detection does not occur as expected since some firmware variants require precise reporting parameters.

## Transport and Connection Context

The TLP2-SFB can use several transport options to reach Plaspy depending on firmware configuration and available network connectivity. Understanding the connection context helps ensure devices are pointed correctly and use the expected transport for a given deployment.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and operator preference.
- The tracker can be set to report to the DNS endpoint d.plaspy.com or to the numeric address 54.85.159.138 if direct IP routing is preferred.
- Plaspy uses port 8888 as the shared port for all supported devices which streamlines provisioning and firewall configuration.
- Some deployments may choose MQTT or SMS for telemetry uplink where the tracker firmware supports those transports in parallel with TCP or UDP.
- When planning deployments account for mobile network behavior and fallback options for intermittent coverage to ensure buffered data synchronizes with Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can change which transports and message options are available so validate behavior against the device firmware level in the field.
- Hardware revisions or regional variants of the TLP2-SFB may expose different radio bands or transport fallbacks that affect how the device reports to Plaspy.
- Manufacturer provided configuration commands and server settings are the authoritative source for configuring reporting to Plaspy.
- Transport selection TCP UDP MQTT or SMS can influence latency reliability and firewall requirements for a given deployment.
- The device's onboard buffering and upload behavior will affect how historical points are delivered to Plaspy after reconnection.
- Confirm BLE sensor compatibility and reporting cadence if you rely on temperature humidity or door telemetry in Plaspy workflows.

## Why Protocol Understanding Matters

A practical understanding of how the TLP2-SFB communicates with Plaspy reduces setup time and simplifies troubleshooting when signals are intermittent or events are missing. Knowing the transport options and the role of firmware and manufacturer settings helps administrators keep devices reporting reliably over time.

- Speeds up initial provisioning by ensuring devices point to the correct Plaspy endpoint and use the supported transport.
- Makes it easier to debug connectivity issues by checking DNS or IP routing port rules and transport selection.
- Helps interpret historical buffering behavior so you understand when and how offline points appear in Plaspy.
- Clarifies expectations for BLE sensor reporting frequency and how that telemetry maps into Plaspy dashboards.
- Informs decisions about mobile data usage battery life and event reporting cadence appropriate for the deployment.

## Why Use Plaspy with This Protocol

Using the TLP2-SFB with Plaspy gives organizations a single platform for real time tracking buffered history and environmental telemetry. The combination of a rugged solar assisted tracker with BLE sensor support and Plaspy ingestion enables practical workflows for container and trailer monitoring cold chain supervision and anti theft or removal detection.

To learn more about Plaspy and how it works with devices like the TLP2-SFB visit https://www.plaspy.com. For the most current device specific protocol details firmware behavior and hardware revisions verify information on the manufacturer site https://www.topflytech.com/ as implementations and support may change over time.
