---
slug: /bofan/b5/protocol
id: b5-protocol
sidebar_label: Protocol
title: Bofan - B5 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Bofan B5 GPS tracker and how it communicates with Plaspy for reliable fleet monitoring
keywords:
  - Bofan B5 protocol
  - Bofan B5 GPS protocol
  - B5 tracker protocol
  - Bofan GPS compatibility Plaspy
  - Bofan tracking protocol Plaspy
  - GPS tracker protocol B5
  - vehicle tracking Bofan B5
  - B5 fleet management protocol
  - Bofan B5 communication
  - Plaspy device compatibility
---

# Bofan - B5 Protocol

This page covers the public protocol context for using the Bofan B5 GPS vehicle tracker with Plaspy. It summarizes how the device reports location, events, and telemetry to Plaspy and what to expect from the shared connection settings used by the platform, based on the B5 product description and common integration patterns.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior in the field may differ slightly from this general overview.

## Protocol Overview

Understanding the B5 reporting protocol in public terms helps explain how the device delivers usable data to Plaspy without exposing manufacturer internals. At a high level, the protocol enables the tracker to identify itself, send GNSS positions, report sensor and input status, and deliver event alerts that Plaspy can ingest and surface to users.

- Transports location updates and telemetry from the B5 to a Plaspy server so live maps and reports can be generated.
- Conveys event types such as geo-fence triggers, overspeed, towing, crash, and SOS so Plaspy can map those events to alarms and workflows.
- Sends device identification and status information so Plaspy can associate reports with the correct asset.
- Buffers offline data locally and uploads stored telemetry when connectivity resumes, enabling continuity of historical records.
- Supports remote command and control over the cellular link for configuration changes and remote outputs where allowed by the device.

## How Plaspy Detects the Protocol

Plaspy provides a single shared endpoint and port for device reporting and includes automatic protocol detection so most properly configured devices do not require a manual protocol selection in the platform. Detection is performed on incoming connections to the shared Plaspy endpoint, allowing devices like the B5 to integrate with minimal setup when they are pointed to the correct server and port.

- Plaspy server domain is d.plaspy.com which devices can be configured to report to.
- Plaspy server IP is 54.85.159.138 as an alternative to the domain for device configuration if needed.
- The platform uses port 8888 for all devices and protocols so a single port setting is sufficient for B5 reporting.
- Plaspy automatically detects the tracker protocol when the B5 sends data to the shared endpoint and port.
- In most cases users do not need to select a protocol inside Plaspy if the device is correctly configured to report to Plaspy.

## Transport and Connection Context

Connection context explains how the B5 reaches Plaspy and which transport options are commonly used. The B5 can be configured to use standard cellular GPRS networking to deliver telemetry to the Plaspy endpoint, and the transport layer may be either UDP or TCP depending on device support and configuration preferences.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration choices.
- Devices may point to d.plaspy.com or to the numeric IP 54.85.159.138 when the network or provisioning requires an IP.
- All devices in Plaspy use the same port which simplifies provisioning and firewall rules for fleet deployments.
- Use the transport mode supported by the specific B5 firmware build and confirm network allowances with your mobile operator.
- Ensure the device APN and SIM provisioning allow GPRS data transfer to the Plaspy endpoint for reliable reporting.

## Protocol Compatibility Notes

- Firmware differences can change available commands, event sets, and reporting intervals; verify compatibility for the specific firmware version installed on each B5.
- Hardware revisions and regional variants may alter supported cellular bands or features such as internal sensors and inputs.
- Manufacturer configuration settings determine whether the B5 uses TCP or UDP and how often it reports; confirm these during device provisioning.
- Network operator behavior and APN settings can affect connectivity and may require specific SIM profile adjustments.
- Validate that any required remote command formats are supported by the device firmware before relying on remote control features.
- Always cross check Plaspy ingestion behavior with the manufacturer documentation for the precise device model and firmware.

## Why Protocol Understanding Matters

A practical grasp of the B5 communication protocol helps reduce setup time, speeds troubleshooting, and improves long term reliability when using Plaspy for fleet management. Knowing how the device reports and what the platform expects enables faster diagnosis when events do not appear or when telemetry appears incomplete.

- Faster identification of configuration issues such as incorrect server, IP, or port settings.
- Better troubleshooting of connectivity problems by confirming transport type and APN settings.
- Clear expectations for what events and telemetry will be available in Plaspy based on firmware capabilities.
- Improved planning for offline logging and data upload strategies when vehicles enter low coverage areas.
- Reduced deployment friction by aligning device provisioning steps with Plaspy endpoint requirements.

## Why Use Plaspy with This Protocol

Using the Bofan B5 with Plaspy gives organizations centralized visibility into vehicle location, engine runtime, and critical events. The combination of onboard sensors, offline buffering, and Plaspy ingestion provides fleet managers with timely alerts, historical reports, and the ability to act with remote outputs where the device supports them. This pairing supports anti-theft workflows, driver safety monitoring, and operational reporting without requiring deep protocol configuration on the platform side.

To learn more about Plaspy and how it works with devices like the Bofan B5, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer instructions verify current information on the Bofan official site https://www.bofancloud.com/ as protocol support and firmware behavior can change over time.
