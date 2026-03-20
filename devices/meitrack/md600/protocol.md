---
slug: /meitrack/md600/protocol
id: md600-protocol
sidebar_label: Protocol
title: Meitrack - MD600 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Meitrack MD600 and Plaspy showing connection settings transport context and compatibility notes
keywords:
  - Meitrack MD600 protocol
  - MD600 GPS protocol
  - Meitrack MD600 Plaspy
  - MD600 communication protocol
  - MD600 tracking protocol
  - Meitrack GPS tracker protocol
  - vehicle DVR protocol
  - fleet tracking MD600
  - Plaspy device compatibility
  - telemetry video integration
---

# Meitrack - MD600 Protocol

This page documents the public protocol context for using the Meitrack MD600 mobile DVR with Plaspy. It focuses on how the device communicates telemetry, events, and video‑related metadata into Plaspy using the shared connection settings that the platform exposes. The content is intentionally high level and suitable for network engineers, integrators, and fleet administrators preparing an MD600 deployment with Plaspy.

Plaspy uses shared endpoint and connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary with firmware version, regional hardware variants, and manufacturer configuration, so this page emphasizes the communication role and practical integration considerations rather than firmware internals or proprietary packet layouts.

## Protocol Overview

The MD600 supports combined telematics and media transport flows so that vehicle telemetry, digital I O and multi channel video metadata can be correlated in Plaspy. The tracker protocol defines how the unit identifies itself, reports GNSS positions and sensor events, and signals metadata that links stored or streamed video to telemetry timelines.

- Enables GNSS position, speed, and heading updates from the MD600 into Plaspy for live tracking and historical playback.
- Carries digital input and output events, CAN bus telemetry, and peripheral sensor reports so Plaspy can trigger alerts and workflows.
- Associates telemetry timestamps and event markers with the MD600 video streams or recorded files for synchronized evidence review.
- Supports standard telematics reporting alongside media streaming so telemetry arrives reliably even when video uses a separate transport.
- Uses manufacturer supported telematics identifiers so Plaspy can recognize device models and correlate reported fields with platform data structures.

## How Plaspy Detects the Protocol

Plaspy listens on a single, shared endpoint and port for incoming device connections and automatically detects the tracker protocol used by each device. When the MD600 is configured to report to Plaspy, the platform typically requires no manual protocol selection inside the service provided the device is pointed to the Plaspy endpoint and configured with the correct transport.

- Plaspy server domain is d.plaspy.com and the platform is reachable at the public server IP 54.85.159.138 on port 8888.
- Devices may be configured to use UDP or TCP when reporting to Plaspy on port 8888 depending on device support and network considerations.
- All devices in Plaspy use the same port which simplifies firewall and network configuration for fleets.
- Plaspy automatically detects the tracker protocol so a properly configured device will be recognized and parsed without manual protocol assignment in most cases.
- If a device does not appear, common checks include verifying APN and reporting server settings on the device and confirming transport protocol alignment with the network.

## Transport and Connection Context

Connection context covers how the MD600 reaches Plaspy and which transport options are commonly used. The MD600 supports cellular, Wi Fi and wired network interfaces for telemetry and media, and it can be set to report to Plaspy using either UDP or TCP on the shared port.

- The device may be configured using UDP or TCP on port 8888 to report to Plaspy depending on operator preference and network behavior.
- Devices can point to the Plaspy server by domain d.plaspy.com or directly to the server IP 54.85.159.138 if DNS is restricted.
- Cellular connectivity including 4G LTE with fallback to 3G and 2G is commonly used for mobile reporting; Wi Fi and Ethernet provide alternatives for depot uploads or high bandwidth video streaming.
- Media streaming and telemetry can use separate transports or ports in device configurations, but telemetry reporting into Plaspy uses the shared port 8888.
- Ensure vehicle or enterprise firewalls allow outbound connections to the Plaspy endpoint and consider preferred transport when planning network quality of service.

## Protocol Compatibility Notes

- Firmware revisions and regional hardware variants for the MD600 can change which fields or messages the device sends; always confirm the firmware level on deployed units.
- Manufacturer supplied protocol modes or optional streaming modules may alter how video metadata and telematics are transmitted to Plaspy.
- Transport selection between UDP and TCP can affect delivery characteristics under cellular networks; choose the mode that best fits your reliability and latency needs.
- Some integrations combine standard telematics reporting with RTMP or other media streaming for video; verify how your MD600 is configured so Plaspy receives the telemetry linkages it expects.
- Validate compatibility against the official Meitrack documentation and release notes when upgrading firmware or changing device configuration.
- Network elements such as carrier APNs, NAT behavior, and SIM data plans can influence device reachability and should be tested during rollout.

## Why Protocol Understanding Matters

Understanding how the MD600 communicates with Plaspy helps ensure reliable tracking, accurate event correlation with video, and faster troubleshooting when connectivity or data quality issues arise. Integrators who know the role of the protocol can better plan network rules, firmware management, and device provisioning.

- Simplifies firewall and carrier configuration by knowing the required server endpoint and transport options.
- Helps validate that GNSS, CAN, and I O data fields are arriving as expected in Plaspy dashboards.
- Enables informed decisions about using UDP versus TCP for telemetry in cellular environments.
- Speeds troubleshooting for intermittent connectivity or missing telemetry by focusing on transport, APN, and firmware versions.
- Improves fleet data quality by aligning device configuration with Plaspy expectations for timestamps and event markers.

## Why Use Plaspy with This Protocol

Using the Meitrack MD600 with Plaspy combines high quality in vehicle video evidence and robust telemetry into a single operational view. This pairing is useful for fleets that need synchronized video plus location based telemetry for incident review, safety programs, fuel monitoring, and remote control workflows. The MD600's multi channel recording and broad peripheral support give Plaspy rich signals to use for alerts and historical analysis.

If you would like to explore Plaspy further visit https://www.plaspy.com to learn more about platform capabilities and device integration. Please note that protocol support, firmware behavior, and manufacturer implementation details may change over time so verify the latest device specific protocol information on the official manufacturer site https://www.meitrack.com/ before large scale deployments.
