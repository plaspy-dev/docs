---
slug: /queclink/gv65_plus/protocol
id: gv65_plus-protocol
sidebar_label: Protocol
title: QuecLink - GV65 Plus Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for QuecLink GV65 Plus communication with Plaspy server for fleet tracking and telemetry
keywords:
  - QuecLink GV65 Plus protocol
  - GV65 Plus Plaspy compatibility
  - QuecLink GPS protocol
  - GV65 Plus communication
  - GPS tracker protocol Plaspy
  - vehicle tracking protocol
  - fleet management GPS protocol
  - GV65 Plus tracking protocol
  - QuecLink protocol compatibility
  - Plaspy device protocol
---

# QuecLink - GV65 Plus Protocol

This page describes the public protocol context for using the QuecLink GV65 Plus tracker with Plaspy. It focuses on how the tracker communicates with Plaspy in general terms so integrators and fleet managers understand connection expectations, transport options, and why protocol context matters for a successful deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behaviour for the GV65 Plus can vary by firmware version, hardware revision and manufacturer implementation, so this page stays at a high level while linking to the key Plaspy connection facts used for device setup.

## Protocol Overview

The communication protocol of the GV65 Plus defines how the device reports location, telemetry and event data to a remote server and how remote commands or output control can be applied where supported. When paired with Plaspy, the protocol enables the tracker to reliably deliver usable position fixes and vehicle signals that are mapped into Plaspy dashboards and alerts.

- Enables periodic and event driven reporting of GPS position, device status and I/O events to a remote platform.
- Provides identification and session context so Plaspy can associate incoming messages with the correct vehicle or asset.
- Carries telemetry items such as ignition state, digital inputs, analog sensor readings, accelerometer events and buffered messages for intermittent connectivity.
- Supports multiple transports and reporting modes so the device can be configured to match network conditions and backend requirements.
- Allows remote management and control of outputs when the device and deployment policy permit remote commands.

## How Plaspy Detects the Protocol

Plaspy accepts device reports on a single shared endpoint and uses automatic detection to match incoming traffic to a supported tracker protocol. In most deployments you do not need to manually select a protocol inside Plaspy if the GV65 Plus is configured to report to the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address used for device endpoints is 54.85.159.138
- Plaspy listens on port 8888 for device reports and control traffic
- Plaspy automatically detects the tracker protocol when the device connects to the Plaspy endpoint
- All devices supported by Plaspy use the same port which simplifies device configuration

## Transport and Connection Context

Connection choices are a practical part of making the GV65 Plus work reliably with Plaspy. The GV65 Plus supports common transport options and can be configured to point at the Plaspy endpoint using either the server domain or the numeric IP, depending on your network and provisioning workflow.

- The device may be configured to use UDP or TCP to send reports to Plaspy on port 8888
- Devices can point to the Plaspy endpoint using the domain name d.plaspy.com or the server IP 54.85.159.138
- Port 8888 is the common port used for all devices in Plaspy which reduces configuration variance across models
- Choose TCP or UDP based on your deployment needs for reliability, latency and carrier network behaviour
- Confirm that carrier APN and firewall rules allow outbound traffic to the Plaspy endpoint on port 8888

## Protocol Compatibility Notes

- Firmware variations can change message content and available features so verify the device firmware level before assuming behavior
- Hardware revisions and accessory modules such as CAN adapters may affect available telemetry and I/O mapping
- Some reporting modes may rely on SMS or alternate transports in addition to TCP or UDP depending on device settings
- Manufacturer side configuration or regional firmware builds can introduce differences in available fields or commands
- Use the shared Plaspy endpoint and automatic detection to simplify setup, but validate that the device is actually sending reports after configuration
- When integrating advanced inputs like CAN or custom sensors, confirm mappings with the official QuecLink documentation

## Why Protocol Understanding Matters

A practical understanding of the GV65 Plus communication protocol helps with initial setup, troubleshooting, and ensuring long term data quality for fleet operations. Knowing the connection expectations and what the tracker sends makes it easier to verify successful integration with Plaspy and to diagnose issues when they arise.

- Speeds up setup by matching device reporting mode to Plaspy connection expectations
- Helps identify transport problems such as blocked ports or incorrect APN settings
- Clarifies what telemetry and event data the device can and cannot send based on firmware
- Assists in validating buffered message behaviour for intermittent connectivity cases
- Reduces ambiguity when confirming device identity and message association in Plaspy

## Why Use Plaspy with This Protocol

Using the GV65 Plus with Plaspy delivers practical benefits for organizations that need persistent visibility, alerting and vehicle telemetry. The tracker’s compact design, internal backup battery and flexible I/O make it a strong choice for anti-theft, driver monitoring and fuel or CAN based telemetry workflows, while Plaspy provides the backend needed to ingest and act on that data.

Plaspy centralizes incoming reports from devices configured to use the Plaspy endpoint and automatically detects the tracker protocol so teams can focus on operational use cases instead of per device protocol selection. To learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behaviour and manufacturer documentation on the QuecLink website https://www.queclink.com/ as protocol support and device implementations can change over time.
