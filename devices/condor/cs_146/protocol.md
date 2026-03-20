---
slug: /condor/cs_146/protocol
id: cs_146-protocol
sidebar_label: Protocol
title: Condor - CS-146 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Condor CS-146 GPS tracker and how it communicates with Plaspy for container tracking and remote access
keywords:
  - Condor CS-146 protocol
  - Condor CS-146 GPS protocol
  - Condor CS-146 communication protocol
  - Condor CS-146 tracking protocol
  - Condor GPS tracker Plaspy
  - CS-146 container tracker protocol
  - container GPS protocol
  - Plaspy device compatibility
  - container tracking protocol
  - fleet management Condor
---

# Condor - CS-146 Protocol

This page covers the public protocol context for using the Condor CS-146 tracker with Plaspy. It explains the role of the device reporting protocol in sending position, status, and access events to the Plaspy platform while keeping the description at a high level suitable for operations teams and integrators.

The CS-146 is a purpose built container tracker that transmits position and operational status over cellular or satellite links and supports remote opening and door status reporting. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, though exact on device behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker communication protocol defines how the CS-146 reports location, status updates, and event notifications so Plaspy can present live maps, alerts, and history. The public description here focuses on what the protocol enables rather than internal packet formats or proprietary encodings.

- Enables periodic and event driven position updates so containers can be shown on live maps and history timelines.
- Carries status and telemetry such as door open close events that Plaspy can turn into alerts and audit logs.
- Supports fallback transmission paths such as cellular and satellite so data reaches the cloud under varying coverage.
- Allows remote command and control signals for authorized actions like remote opening when the device and manufacturer support it.
- Lets Plaspy associate device identity and status with a customer account for unified fleet reporting and rule based automations.

## How Plaspy Detects the Protocol

Plaspy receives tracker messages on a shared inbound endpoint and automatically determines the device protocol based on the incoming connection and message context. In most deployments the user does not need to select a protocol inside Plaspy when the device is configured to report to the Plaspy endpoint.

- Plaspy accepts connections at the domain d.plaspy.com and at the public IP 54.85.159.138.
- Plaspy uses a single port for all device connections so configuration is consistent across supported models.
- The port used by Plaspy for device reporting is 8888 and this same port is used for all devices in the platform.
- Plaspy detects the tracker protocol automatically if the CS-146 is correctly configured to send messages to the Plaspy endpoint.
- Typically there is no need to choose a protocol manually in Plaspy when reporting is set to the shared Plaspy endpoint and port.

## Transport and Connection Context

Connection type and transport can vary by device configuration and network conditions. The CS-146 can transmit via cellular or satellite back to Plaspy, and the device may be configured to use either UDP or TCP for the link into the platform.

- Devices may be configured to point to the Plaspy domain d.plaspy.com or to the numeric endpoint 54.85.159.138.
- The device may be configured using UDP or TCP on port 8888 depending on device support and operator preference.
- All devices in Plaspy use the same port so onboarding and firewall rules are simpler to manage.
- Choose the transport mode supported by the device firmware and the network environment for best reliability.
- Verify connectivity from the device network to Plaspy on port 8888 to ensure messages reach the platform.

## Protocol Compatibility Notes

- Firmware differences across CS-146 units can affect message cadence, supported events, and transport capabilities.
- Hardware revisions or optional satellite modules may introduce variation in available telemetry and fallbacks.
- The choice of UDP versus TCP can influence delivery characteristics and retry behavior in real world networks.
- Some manufacturer features such as remote open commands require specific configuration and may be firmware dependent.
- Plaspy automatically detects the protocol, but validating device configuration against manufacturer documentation is recommended.
- Confirm that the CS-146 is set to report to d.plaspy.com or 54.85.159.138 on port 8888 for smooth onboarding.

## Why Protocol Understanding Matters

Understanding the communication protocol helps operations and technical teams set up devices correctly, troubleshoot message delivery, and ensure reliable long term monitoring of container assets in Plaspy.

- Ensures correct device configuration so position and event data reach Plaspy without manual protocol selection.
- Speeds troubleshooting by clarifying whether a connectivity, transport, or firmware issue is affecting reports.
- Helps set firewall and network rules to allow traffic to d.plaspy.com or 54.85.159.138 on port 8888.
- Supports planning for coverage gaps by confirming cellular and satellite fallbacks are enabled on the device.
- Improves auditing and compliance by ensuring event data such as door open close reports are included and timestamped.

## Why Use Plaspy with This Protocol

Using the CS-146 with Plaspy gives operators a streamlined path to real time container visibility, event driven alerting, and centralized control for cargo security. The combined solution supports mixed connectivity environments and delivers telemetry into established workflows for monitoring, geofencing, and incident response.

Plaspy provides a consistent endpoint and port for device reporting and automatically detects tracker protocols so onboarding is faster and configuration is simpler. To learn more about Plaspy and how it supports fleet and asset tracking visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer implementation with the official Condor documentation at https://condorskyseeker.com/ since device capabilities can change over time.
