---
slug: /itriangle/bharat101/configuration
id: bharat101-configuration
sidebar_label: Configuration
title: iTriangle - Bharat101 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for iTriangle Bharat101 to connect with Plaspy using shared server settings and protocol detection
keywords:
  - iTriangle Bharat101 configuration
  - Bharat101 setup Plaspy
  - iTriangle GPS tracker configuration
  - Bharat101 NavIC configuration
  - AIS 140 tracker setup
  - Bharat101 server configuration
  - Bharat101 GPS platform setup
  - vehicle tracking Bharat101
  - fleet management Bharat101
  - Bharat101 configuration guide
---

# iTriangle - Bharat101 Configuration

This page documents the public configuration context for using the iTriangle Bharat101 tracker with Plaspy. It explains the practical server settings and workflow required to point the device at Plaspy, while using the published capabilities of the Bharat101 such as NavIC support, embedded eSIM, OTA updates, and multiple configuration interfaces.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide to understand the required Plaspy endpoint and the common setup flow, and always cross check device specific steps against the manufacturer documentation.

## Configuration Overview

Configuring the Bharat101 for Plaspy means preparing the device to send GNSS and event data to Plaspy servers and verifying that the device appears and reports correctly in the Plaspy platform. The key objective is to ensure reliable cellular connectivity and correct server settings so Plaspy can receive and decode the tracker messages.

- Point the Bharat101 to the Plaspy server endpoint using the published server settings.
- Choose the transport mode supported by the device and set the device to use that transport for reporting.
- Validate network connectivity and confirm the embedded eSIM or cellular data plan is active.
- Save and apply configuration then restart or reboot the device if required by the manufacturer.
- Verify the tracker is visible and reporting in Plaspy after configuration.

## Configuration Overview

(Note: This section intentionally repeats the heading to match the requested page structure)

## Plaspy Server Settings

When configuring the Bharat101 to communicate with Plaspy, use the following public server settings. These settings are the same across all devices supported by Plaspy and allow the platform to automatically determine the correct protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888 depending on device preference or firmware capability
- Plaspy automatically detects the tracker protocol so the same port is used for all supported devices

## Typical Requirements Before Setup

- Ensure the Bharat101 has a stable power source and any backup battery is charged if required by the installation.
- Confirm the embedded eSIM or cellular connectivity and data plan are active so the device can reach Plaspy servers.
- Have access to the official iTriangle configuration tools or methods for this model such as USB, SMS, TCP configuration tools, or Bluetooth as supported by the device.
- Physical access to the device for initial setup, or remote access via the manufacturer tool or approved provisioning workflow.
- Credentials or access to your Plaspy account or provisioning process so you can validate device visibility and telemetry once reporting begins.

## How This Tracker Connects to Plaspy

The Bharat101 sends GNSS positions, motion events, and digital or analog I O states to configured IP servers. For Plaspy integration the device is configured to report to the shared Plaspy endpoint and port, which allows Plaspy to ingest location and event telemetry for mapping, alerts, and reporting.

- Device is set to send data to d.plaspy.com or 54.85.159.138 using port 8888
- Transport can be UDP or TCP depending on the tracker setting; both are supported by Plaspy
- Plaspy receives telemetry and automatically detects the device protocol for decoding
- Real time position and event updates are forwarded to Plaspy dashboards and monitoring tools
- The device can retain records locally and forward stored messages when connectivity is restored

## Common Configuration Workflow

1. Access the official iTriangle configuration method for the Bharat101 such as USB configuration tool, Bluetooth configuration, SMS commands, or the OEM provisioning application.
2. In the device server settings enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the reporting port to 8888 as the device server port.
4. Choose UDP or TCP transport if the device requires a transport selection and save that setting.
5. Apply or save the configuration on the device using the manufacturer tool or command method.
6. Restart or power cycle the tracker if required by the manufacturer to activate the new server settings.
7. Validate that the device reports to Plaspy and that telemetry appears correctly in your Plaspy account or test environment.

## Example Configuration Commands

The Bharat101 supports multiple configuration interfaces and the exact commands or menus depend on the chosen method and the device firmware. Because iTriangle provides USB, SMS, TCP/IP, and Bluetooth configuration options, the specific command syntax and tool usage will vary. Use the iTriangle configuration tool or the SMS/USB documentation from the manufacturer to apply the following public server values:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport UDP or TCP

Refer to the official iTriangle configuration manual for exact command formats or GUI steps for your firmware revision.

## Configuration Notes

- Firmware revisions can change available configuration menus and command syntax; always confirm the device firmware version before following a configuration guide.
- The Bharat101 supports OTA FOTA updates which may alter or improve protocol handling, so keep devices updated per your deployment policy.
- Choose TCP if you prefer connection oriented delivery, or UDP if low overhead is preferred; Plaspy supports both and automatically detects protocol specifics.
- SMS based configuration and USB or Bluetooth tools are supported by the Bharat101; use the method that matches your deployment and security requirements.
- Plaspy uses the same port for all supported devices which simplifies multi device deployments and centralizes server settings.

## Why Use Plaspy with This Configuration

Using the Bharat101 with Plaspy combines the device strengths such as AIS 140 compliance, NavIC enabled positioning, an embedded eSIM and extensive I O with Plaspy platform capabilities for real time tracking, alerts, and fleet monitoring. The shared Plaspy server endpoint and automatic protocol detection reduce per device configuration complexity and make it easier to onboard Bharat101 devices across a fleet.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration methods and firmware behavior with the manufacturer at https://www.itriangle.net/ to ensure your setup follows the most current instructions and compliance guidance.
