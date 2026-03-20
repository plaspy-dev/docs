---
slug: /istartek/vt005/protocol
id: vt005-protocol
sidebar_label: Protocol
title: iStartek - VT005 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for iStartek VT005 GPS tracker and Plaspy compatibility for device communication and reporting
keywords:
  - iStartek VT005 protocol
  - iStartek VT005 GPS protocol
  - iStartek VT005 communication protocol
  - iStartek VT005 tracking protocol
  - iStartek VT005 Plaspy compatibility
  - VT005 OBD II tracker
  - OBD II GPS tracker
  - vehicle tracking protocol
  - fleet management GPS protocol
  - TCP UDP GPS reporting
---

# iStartek - VT005 Protocol

This page provides a public protocol context for using the iStartek VT005 tracker with Plaspy. It summarizes how the VT005, a plug and play 4G OBD II GPS tracker, communicates telemetry to a Plaspy server for real time monitoring, route history, and vehicle diagnostics without exposing firmware internals or private parsing logic.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, region, and manufacturer implementation, so this page focuses on the high level communication context and practical compatibility considerations for integrating VT005 devices with Plaspy.

## Protocol Overview

The protocol used by the VT005 enables the device to deliver position fixes, OBD II derived telemetry, and event flags to a remote fleet management platform. At a high level the protocol's role is to reliably convey usable telemetry, identify the reporting device, and support event driven workflows in Plaspy while allowing the device to store records locally during network outages.

- Transport vehicle location data and position fixes to a remote server so Plaspy can show live maps and route history.
- Report OBD II telemetry and diagnostics such as ignition state and engine fault indicators that Plaspy surfaces in dashboards.
- Deliver event flags for alarms and driver behavior such as collision, tamper, and harsh driving that trigger alerts in Plaspy.
- Support store and forward behavior so the VT005 can log GPS records locally and upload them when connectivity resumes.
- Provide flexible reporting channels so the device can use primary IP reporting and SMS as a fallback when required.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port and is designed to automatically detect the protocol a reporting tracker uses once it begins sending data to the Plaspy server. In most deployments the VT005 simply needs to be configured to report to the Plaspy endpoint and no manual protocol selection inside Plaspy is required.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 which devices can point to for reporting.
- The port used for Plaspy device reporting is 8888 and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol so users typically do not need to select a protocol inside Plaspy if the device is configured correctly.
- Proper device reporting settings and network connectivity are the primary factors for successful automatic detection.
- If a device supports multiple transports or firmware options, verify it is set to report to the Plaspy endpoint to enable detection.

## Transport and Connection Context

The VT005 can be configured to use different transport methods depending on device capabilities and deployment needs. Plaspy accepts traffic on a single common port so the device should be pointed to the Plaspy endpoint using the supported transport.

- The device may be configured using UDP or TCP on port 8888 depending on the VT005 firmware and configuration options available.
- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for direct IP reporting if DNS resolution is not used.
- The same port is used across all devices in Plaspy which simplifies device provisioning and firewall configuration.
- Devices that support SMS reporting can use SMS as a secondary channel when cellular IP connectivity is unavailable.
- Confirm the chosen transport matches the VT005 firmware behavior and the cellular network characteristics in your region.

## Protocol Compatibility Notes

- Firmware revisions can change which transport modes and message details the VT005 supports; confirm the firmware version when validating compatibility.
- Hardware or regional variants may affect available cellular bands and reporting behavior; regional models may behave differently in network handoffs.
- Some VT005 units provide SMS fallback in addition to TCP reporting; verify fallback behavior for deployments that require high resilience.
- Plaspy’s automatic detection requires the device to send data to the Plaspy endpoint and port; incorrect server settings will prevent automatic identification.
- Local logging and store and forward capacities vary by firmware and configuration and should be validated for use cases that require guaranteed historical capture.
- Test a small set of devices before large scale rollouts to confirm transport settings, event reporting, and OBD II telemetry are delivered as expected.

## Why Protocol Understanding Matters

Understanding how the VT005 communicates helps with correct configuration, faster troubleshooting, and predictable behavior in production fleets. Clear knowledge of transport options, server endpoints, and device logging behavior reduces integration time and supports long term reliability.

- Ensures devices are pointed to the correct Plaspy endpoint and port for automatic protocol detection.
- Helps technicians choose TCP or UDP appropriately based on network behavior and firmware support.
- Enables quicker diagnosis when position updates, OBD II telemetry, or event flags are missing.
- Informs decisions about SMS fallback, local logging retention, and firmware update impacts.
- Supports planning for regional cellular variants and any network level firewall requirements.
- Makes it easier to align device behavior with Plaspy workflows such as alerts, diagnostics, and historical reporting.

## Why Use Plaspy with This Protocol

Using the VT005 with Plaspy gives organizations a straightforward path to real time vehicle visibility, event driven alerts, and OBD II based diagnostics without complex wiring. The plug and play OBD II form factor, on board logging, and multi network cellular support make the VT005 a practical choice for fleet managers who need rapid deployment and reliable telemetry feeding into Plaspy workflows.

Plaspy consolidates VT005 location, event, and diagnostic data into centralized dashboards and reports so teams can monitor routes, respond to incidents, and track vehicle health. To learn more about Plaspy and how it integrates with devices like the VT005 visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol and firmware information with the manufacturer at https://istartek.com/.
