---
slug: /gotop/te_200/protocol
id: te_200-protocol
sidebar_label: Protocol
title: GOTOP - TE-200 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP TE-200 GPS tracker and how it communicates with Plaspy for reliable pet and small asset tracking
keywords:
  - GOTOP TE-200 protocol
  - GOTOP TE-200 GPS protocol
  - TE-200 Plaspy compatibility
  - GOTOP pet tracker protocol
  - TE-200 communication protocol
  - GOTOP tracking protocol
  - Plaspy device compatibility
  - TE-200 GPRS reporting
  - GOTOP GPS tracker integration
  - TE-200 firmware compatibility
---

# GOTOP - TE-200 Protocol

This page describes the public protocol context relevant to using the GOTOP TE-200 mini pet tracker with Plaspy. It summarizes how the device reports location and telemetry to Plaspy in non sensitive terms, highlights the role of the tracker communication protocol, and clarifies the common connection settings used for Plaspy integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by TE-200 firmware version, hardware revision, and manufacturer implementation, so this page focuses on general, public facing protocol concepts and practical setup considerations rather than firmware internals or private packet formats.

## Protocol Overview

The TE-200 communicates position, movement events, battery status, and alerts to a backend platform using its cellular connectivity. The protocol's role is to reliably deliver those telemetry points and event notifications so Plaspy can display them on maps, trigger alerts, and maintain historical logs.

- Enables regular position reporting and occasional event messages such as geo-fence, movement, and low battery alerts.
- Provides identity information and status metadata so Plaspy can attribute reports to the correct device record.
- Supports data continuity by allowing the device to buffer points during coverage gaps and re-upload them when connectivity returns.
- Allows configuration commands and alarm settings to be applied remotely via the device connectivity channels supported by the tracker.
- Works over the device cellular data or SMS reporting channels to reach backend endpoints such as Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives reports from the TE-200 using a common hosting endpoint and identifies the tracker protocol automatically. When the TE-200 is configured to send reports to the Plaspy endpoint, no manual protocol selection inside Plaspy is normally required.

- Plaspy accepts device reports at the domain d.plaspy.com and at the public IP 54.85.159.138.
- All devices use the same port on Plaspy which simplifies device configuration and routing.
- The platform automatically detects the tracker protocol when the device connects and begins reporting.
- Users generally only need to point the TE-200 to the Plaspy endpoint and confirm transport settings on the device.

## Transport and Connection Context

The TE-200 can report to Plaspy using the device cellular link, and it supports configuration for network transport based on the tracker capabilities. Plaspy is reachable via the shared endpoint and port so devices configured correctly will be routed into the Plaspy protocol detection and parsing pipeline.

- The device may be configured to use UDP or TCP on port 8888 depending on its configuration and network behavior.
- Plaspy is reachable at the domain d.plaspy.com or directly at the IP 54.85.159.138 for devices that require a numeric endpoint.
- Plaspy uses port 8888 for all devices to simplify setup and ensure consistent connectivity.
- The TE-200 can also report via SMS as an alternative channel for environments where GPRS data is unavailable.
- Use the transport mode supported and recommended by your device firmware and mobile operator for best results.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, or event reporting behavior; check the device firmware level when validating compatibility.
- Hardware variants and regional models sometimes have different default transport settings or feature sets that affect how they report to backend platforms.
- The TE-200 supports both GPRS data and SMS reporting modes; selecting between them affects how real time updates and historical reuploads behave.
- Transport selection between UDP and TCP can influence reliability under certain network conditions; choose the mode compatible with your SIM and operator.
- Carrier APN configuration and an active SIM are required for GPRS reporting to Plaspy; SMS reporting requires SMS routing to the platform where supported.
- Always validate the device configuration and network connectivity against the manufacturer documentation before large scale deployment.

## Why Protocol Understanding Matters

Understanding how the TE-200 communicates with Plaspy helps ensure reliable setup, faster troubleshooting, and consistent long term operation for pet and small asset monitoring.

- Speeds up setup by ensuring devices are pointed at d.plaspy.com or 54.85.159.138 and using port 8888 as required by Plaspy.
- Helps diagnose missing reports by checking transport mode, firmware version, SIM and carrier connectivity.
- Clarifies expectations for alert delivery, event timing, and how buffered data is re-uploaded after coverage gaps.
- Informs decisions about which reporting mode to use for battery life, latency, and coverage trade offs.
- Supports predictable operational workflows when devices are updated or replaced across a deployment.

## Why Use Plaspy with This Protocol

Using the GOTOP TE-200 with Plaspy gives pet owners and small asset managers a straightforward way to collect and act on location, movement, and battery telemetry. The TE-200’s compact form factor, internal log buffer, and support for GPRS and SMS reporting align with common Plaspy use cases for real time visibility, historical tracking, and alerting.

If you want to learn more about how Plaspy works with devices like the TE-200 visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware specifications please verify information with the manufacturer at https://www.gotop.cc/ as implementations can change over time.
