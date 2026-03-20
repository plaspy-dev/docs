---
slug: /itriangle/ux101_al/configuration
id: ux101_al-configuration
sidebar_label: Configuration
title: iTriangle - UX101-AL++ Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the iTriangle UX101-AL++ with Plaspy server settings and setup checklist
keywords:
  - iTriangle UX101-AL++ configuration
  - iTriangle UX101-AL++ setup
  - iTriangle server configuration
  - UX101-AL++ Plaspy setup
  - UX101-AL++ GPS tracker configuration
  - iTriangle device setup guide
  - UX101-AL++ fleet tracking
  - Plaspy tracker configuration
  - GPS tracker server configuration
  - vehicle telematics setup
---

# iTriangle - UX101-AL++ Configuration

This page documents the public configuration context for using the iTriangle UX101-AL++ with Plaspy. It consolidates the essential server settings and practical setup guidance you will need to point the device at Plaspy for real time tracking and telemetry ingestion. The UX101-AL++ is a rugged AIS 140 certified GPS tracker and 4G telematics data logger built for demanding vehicle and industrial applications and this guidance focuses only on the public connectivity information required to integrate it with Plaspy.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol once the device connects. Exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so treat this page as platform integration guidance rather than a replacement for the official iTriangle configuration manual.

## Configuration Overview

This configuration process prepares the UX101-AL++ to send location, event, and telemetry data to Plaspy so the device becomes visible and manageable inside the Plaspy platform. It focuses on setting the device server endpoint, transport, and verifying connectivity so your units appear in Plaspy dashboards and reporting.

- Configure the device to report to the Plaspy server endpoint so GNSS fixes and events stream to the platform.
- Set the transport and server port consistent with Plaspy requirements to ensure successful TCP or UDP sessions.
- Validate cellular connectivity, APN, and any eSIM or data plan settings to enable data transmission over LTE and fallback networks.
- Confirm the device registers and appears in Plaspy, then test key event triggers such as ignition, tamper, or panic reporting.
- Save and apply firmware and network settings, and follow manufacturer prompts to reboot the device if required.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port so you only need to set port 8888 for supported trackers

## Typical Requirements Before Setup

- A powered UX101-AL++ unit with access to the manufacturer configuration method or service tool
- Active cellular connectivity via eSIM or a data plan compatible with the device bands and network
- APN and carrier details ready to configure if required by your firmware or carrier
- Device identifiers such as IMEI or serial number available for platform registration and troubleshooting
- Access to the device location or physical installation if antenna placement or I/O wiring must be verified
- A Plaspy account with device provisioning details available to confirm the device appears in the platform after setup

## How This Tracker Connects to Plaspy

When configured, the UX101-AL++ transmits GNSS fixes, telemetry, and event data to the Plaspy server endpoint. The device will use TCP or UDP transport on the shared Plaspy port and Plaspy will automatically detect the incoming tracker protocol and decode messages for display in the platform.

- The tracker is set to report to d.plaspy.com or 54.85.159.138 using port 8888
- Device data streams over LTE with fallback to lower generation networks as available by hardware and carrier
- Events such as ignition, tamper, panic, and accelerometer triggers are sent to Plaspy for alerting and logging
- Telemetry including CAN diagnostics and other sensor inputs are forwarded to Plaspy for dashboards and reporting
- Plaspy ingests the data and automatically detects the tracker protocol so no manual protocol selection is needed in the platform

## Common Configuration Workflow

1. Access the official iTriangle configuration method or software as provided by the manufacturer or your vendor.
2. In the device TCP UDP or server settings enter either the server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP transport on the device if the configuration tool requires a transport selection.
5. Enter APN and carrier settings or confirm internal eSIM activation so the device can establish data sessions.
6. Apply or save the configuration changes, then restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by confirming presence and incoming messages in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and format depend on the iTriangle firmware and the manufacturer configuration tool you use. iTriangle devices may be configured by a vendor software tool, web interface, or SMS commands depending on the firmware release. Consult the official iTriangle documentation or your vendor for the exact command syntax and examples for your firmware version.

## Configuration Notes

- Firmware differences and hardware revisions can change the exact configuration UI, command syntax, or required fields. Verify commands in the iTriangle reference.
- When a device requires choosing UDP or TCP, select the transport supported by your installation and follow the device tool instructions; Plaspy will detect the incoming protocol automatically.
- Confirm APN and carrier settings before testing connectivity to minimize false negatives during validation.
- Use the device IMEI and any manufacturer logs to troubleshoot connection attempts if the device does not appear in Plaspy.
- For devices with internal eSIM support, ensure eSIM activation and network provisioning are completed prior to pointing the device to d.plaspy.com or 54.85.159.138.

## Why Use Plaspy with This Configuration

Pairing the iTriangle UX101-AL++ with Plaspy gives organizations a practical way to capture real time location, vehicle diagnostics, and event data from rugged vehicles and industrial assets. The UX101-AL++ hardware features such as dual CAN and durable enclosure combine with Plaspy ingestion and protocol detection to provide reliable visibility for fleet operations, OEM telematics workflows, and asset security use cases.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes, and manufacturer guidance verify information on the official iTriangle website https://www.itriangle.net/ since setup methods and firmware behavior can change over time.
