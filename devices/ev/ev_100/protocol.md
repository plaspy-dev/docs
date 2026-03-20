---
slug: /ev/ev_100/protocol
id: ev_100-protocol
sidebar_label: Protocol
title: EV - EV-100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for EV EV-100 GPS tracker compatibility with Plaspy. Connection guidance and compatibility notes.
keywords:
  - EV EV-100 protocol
  - EV-100 GPS tracker
  - EV EV-100 communication
  - EV-100 tracking protocol
  - EV tracker Plaspy
  - EV-100 Plaspy compatibility
  - vehicle GPS EV-100
  - motorcycle GPS EV-100
  - fleet management EV-100
  - EV-100 protocol guide
---

# EV - EV-100 Protocol

This page covers the public protocol context for using the EV EV-100 tracker with Plaspy. It explains how the tracker communicates in general terms, how Plaspy receives device reports, and what connection settings are commonly used so integrators and administrators can plan deployment and troubleshooting steps.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices are pointed to the Plaspy endpoint. Exact on-device protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on high level, non sensitive details that are useful for setup and validation.

## Protocol Overview

The EV-100 uses a device reporting protocol that enables the tracker to identify itself, transmit location and sensor data, and send alarm or status updates to a remote server. The protocol defines the messages the device sends and how the server interprets them so that tracking data becomes usable in Plaspy.

- Enables periodic and event driven position reporting from the tracker to a remote receiver.
- Conveys vehicle status and alarms such as power loss, low battery, and motion events alongside GPS coordinates.
- Allows the device to store data locally and reupload when a GPRS connection is available to avoid data loss.
- Supports remote commands and configuration mechanisms implemented by the manufacturer, exposed via SMS or over the network depending on device capability.
- Works together with the transport layer to reliably deliver reports to Plaspy for processing and display.

## How Plaspy Detects the Protocol

Plaspy is designed to receive reports from many tracker models and automatically determine the protocol in use when a properly configured device begins reporting. In most cases, no manual protocol selection is required inside Plaspy if the device is configured to report to the Plaspy endpoint.

- Plaspy listens on a shared endpoint that accepts tracker reports and inspects incoming connections to identify the tracker type.
- The Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for direct configuration.
- Plaspy uses the same port for all supported devices which simplifies device configuration and network rules.
- When a device reports to the Plaspy endpoint, the platform will match the report format to a known protocol and process data accordingly.
- Users typically only need to configure the device to report to the Plaspy domain or IP and the platform handles detection automatically.

## Transport and Connection Context

Connection choice affects how the EV-100 sends data to Plaspy but does not change the fact that the platform centralizes reception on the same port. Understanding the transport context helps with firewall rules and initial device configuration.

- The device may be configured using UDP or TCP on port 8888 depending on device support and onsite configuration choices.
- The Plaspy server domain d.plaspy.com and Plaspy server IP 54.85.159.138 are valid endpoints that devices can be pointed to for reporting.
- The port is 8888 and is used consistently across Plaspy supported devices to simplify deployments and network configuration.
- Choose UDP for lightweight periodic reports where supported, or TCP when session reliability is required and supported by the device and network.
- Ensure outbound GPRS or mobile data is allowed from the SIM and that APN settings are correct so the EV-100 can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change reporting intervals, available alarms, or optional fields in outgoing messages; always verify firmware-specific notes.
- Hardware revisions or regional variants of the EV-100 may expose different configuration options or transport defaults.
- Some features such as OTA firmware upgrade, local flash buffering, and accelerometer driven reporting may be optional or vary by build.
- The choice of UDP versus TCP on the device must match the device capability and desired reliability for your deployment.
- Manufacturer remote commands and SMS controls may coexist with GPRS reporting and can affect how devices behave when managed remotely.
- Validate device settings by confirming the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 and that mobile network connectivity is available.

## Why Protocol Understanding Matters

A practical understanding of the EV-100 reporting protocol helps with smoother deployments, quicker troubleshooting, and reliable long term operation when integrated with Plaspy. Knowing the limits and behaviors of the protocol reduces guesswork during setup and supports predictable performance.

- Helps ensure correct device configuration so reports arrive at Plaspy without manual protocol selection.
- Makes it easier to diagnose connectivity issues by checking transport, endpoint, and port settings.
- Supports capacity planning by understanding typical report frequency and event driven reporting behavior.
- Aids firmware management and expectations when features differ between firmware or hardware revisions.
- Improves security and compliance posture by ensuring devices use expected endpoints and ports for reporting.

## Why Use Plaspy with This Protocol

Using the EV EV-100 with Plaspy provides a practical, centralized way to convert device reports into actionable location and status information for fleet and motorcycle tracking. The EV-100's rugged design, broad voltage range, internal antennas, and motion sensing features complement Plaspy's ability to ingest and present vehicle telemetry for monitoring, alerts, and operational insight.

To learn more about Plaspy and how it works with devices like the EV-100, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware information always check the manufacturer website at http://www.eviewltd.com/ as implementation and firmware behavior can change over time.
