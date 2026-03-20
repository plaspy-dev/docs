---
slug: /gelix/gelix_lite/configuration
id: gelix_lite-configuration
sidebar_label: Configuration
title: Gelix - Gelix Lite Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gelix Lite and Plaspy server compatibility for GPS tracking
keywords:
  - Gelix
  - Gelix Lite
  - Gelix Lite configuration
  - Gelix Lite setup
  - Gelix Lite Plaspy
  - Gelix tracking configuration
  - Gelix Lite GPS configuration
  - Plaspy device setup
  - GPS tracker configuration
  - vehicle tracking setup
---

# Gelix - Gelix Lite Configuration

This page describes the public configuration context for using the Gelix Lite telematics device with Plaspy. It focuses on the practical server settings and workflow needed to point the device to Plaspy so the device will report location and event data to the platform. The guidance here is based on publicly available integration concepts and Plaspy server settings.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device sends data. Exact manufacturer-side setup steps can vary depending on Gelix Lite firmware, hardware revision, installation type, and vendor tools. The Gelix Lite supports data transmission via GPRS IP and SMS and can be configured to report to receiver servers, so you will typically point one of those receiver entries to Plaspy using the shared server settings below.

## Configuration Overview

Preparing the Gelix Lite for Plaspy integration involves setting the device to report to the Plaspy endpoint and validating connectivity so the unit becomes visible in the Plaspy platform. The goal is to ensure reliable GPRS connectivity or SMS fallback, correct server address and transport, and that the device is recognized by Plaspy.

- Configure one of the Gelix Lite receiver server entries to point to Plaspy so the device sends its telemetry to the platform.
- Ensure the device has valid GPRS connectivity or SMS capability for initial configuration and ongoing reporting.
- Choose the transport protocol supported by the device and set the port to match Plaspy requirements.
- Validate the device IMEI and identification in Plaspy so received messages are associated with the correct asset.
- Test reporting by triggering movement or a manual position report and confirming the device appears in Plaspy.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the Gelix Lite. Plaspy uses the same port for all devices and automatically detects the tracker protocol when data arrives.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- Note that all devices in Plaspy use the same port 8888 for inbound tracker connections

## Typical Requirements Before Setup

- Device powered and accessible either in the vehicle or on the bench for configuration
- Active SIM card with data enabled for GPRS IP reporting or SMS enabled for SMS-based setup and fallback
- Access to Gelix official configuration method such as the vendor configuration tool, SMS command interface, or serial/USB configuration utility
- Knowledge of the device IMEI or identifier to register and verify the unit in Plaspy
- Network coverage where the device will operate to allow GPRS communication to the Plaspy endpoint

## How This Tracker Connects to Plaspy

The Gelix Lite is configured to send its recorded telemetry over GPRS IP or via SMS to designated receiver servers. When pointed to Plaspy, the device transmits its data to the shared Plaspy server endpoint and port so Plaspy can automatically map protocol and present device data in the platform.

- The device sends GPRS IP packets to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on the device configuration and preference
- Plaspy automatically detects the tracker protocol from incoming messages so the same port is used for all supported devices
- Gelix Lite can be set to use one of two receiver servers and one of those entries can be configured for Plaspy
- SMS may be used for command based configuration or as a fallback reporting path where supported

## Common Configuration Workflow

1. Access the official Gelix configuration method or software provided by the manufacturer, or prepare SMS commands if that is the supported configuration channel.
2. Enter the Plaspy server domain d.plaspy.com or the IP 54.85.159.138 as the device receiver.
3. Set the device port to 8888 to match Plaspy inbound settings.
4. Choose UDP or TCP if the device requires a transport selection; either is acceptable because Plaspy auto detects the protocol.
5. Apply or save the configuration in the device configuration tool or send the SMS configuration commands and wait for confirmation.
6. Restart the device if the manufacturer instructions require a reboot to apply network settings.
7. Validate that the device reports to Plaspy by checking that its IMEI or device identifier appears in the Plaspy platform and that recent position or heartbeat messages are received.

## Example Configuration Commands

The Gelix Lite supports configuration via manufacturer tools and SMS commands. Exact commands and syntax vary by firmware and vendor software. Consult the Gelix configuration guide for the precise command set for your firmware revision. Typical manufacturer methods include:

- Using the official Gelix configuration application or serial interface to set server address and port
- Sending SMS configuration commands to the device phone number when SMS setup is supported by the device

Because command syntax differs across firmware versions and vendor tools, follow the Gelix documentation or the configuration utility prompts to enter:
- server domain or IP as d.plaspy.com or 54.85.159.138
- port 8888
- transport choice UDP or TCP

If your Gelix documentation provides SMS command examples, apply them in the order the manufacturer specifies and verify each step before moving to the next.

## Configuration Notes

- Firmware differences can change available options and command syntax; confirm the exact commands for your Gelix Lite firmware version.
- Choose UDP or TCP according to your network and installer preference; Plaspy will detect the protocol automatically on port 8888.
- When available, use the official Gelix configuration tool for the most reliable results over ad hoc SMS configuration.
- The Gelix Lite can use two receiver servers; you may retain a secondary receiver for testing or backup reporting.
- Remote firmware upgrade capability exists on Gelix Lite according to manufacturer material; confirm upgrade procedures with Gelix before applying firmware updates.

## Why Use Plaspy with This Configuration

Configuring the Gelix Lite to report to Plaspy centralizes location and event data for fleet visibility and operational monitoring. Using Plaspy's shared server endpoint simplifies device onboarding because the platform uses the same inbound port for all devices and automatically detects the tracker protocol, reducing configuration complexity at scale.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the latest Gelix Lite device specific configuration commands, firmware details, and installation instructions verify the official manufacturer documentation at http://www.gelix.com/ as setup methods and firmware behavior can change over time.
