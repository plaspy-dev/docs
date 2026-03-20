---
slug: /wp/tt_1/configuration
id: tt_1-configuration
sidebar_label: Configuration
title: WP - TT-1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for WP TT-1 tracker compatibility with Plaspy including server settings and practical setup steps
keywords:
  - WP TT-1 configuration
  - WP TT-1 setup
  - TT-1 Plaspy
  - Plaspy tracker configuration
  - WP trailer tracker configuration
  - TT-1 GPS setup
  - vehicle tracking configuration
  - fleet tracker setup
  - GSM GPRS tracker configuration
  - asset tracking TT-1
---

# WP - TT-1 Configuration

This page explains the public configuration context for using the WP TT-1 trailer tracking device with the Plaspy platform. It focuses on the practical server settings and setup workflow required to point a TT-1 to Plaspy so the device can transmit location and event data to your Plaspy account. The guidance here uses public Plaspy server details and general manufacturer considerations drawn from the TT-1 product description.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side steps can vary depending on the tracker firmware, hardware revision, installation type, and vendor tools, so use this page together with the WP TT-1 official documentation during configuration and testing.

## Configuration Overview

The goal of configuration is to prepare the TT-1 to communicate reliably with Plaspy so location, alarm, and diagnostic reports appear in the platform. This includes configuring the device server target, transport type, and ensuring the device has a working cellular connection and adequate power for testing.

- Set the TT-1 to send data to the Plaspy server endpoint so messages are delivered to your Plaspy account.
- Choose and verify the transport (UDP or TCP) if the device requires an explicit selection.
- Configure the server host using the Plaspy domain or IP address and the shared port used by all Plaspy devices.
- Save and apply settings on the device and perform a restart if required to activate the new server configuration.
- Validate connectivity by confirming the device reports location and event messages into Plaspy.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the WP TT-1:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Supported transport UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when device messages arrive

Plaspy uses the same port for all supported devices and the platform will detect which protocol the tracker is using, so you only need to point the TT-1 at the correct host and port.

## Typical Requirements Before Setup

- A TT-1 unit that is powered and has any required backup battery charged.
- A valid SIM card inserted with a working data plan and GSM coverage for the region.
- Access to the WP TT-1 manufacturer configuration method or software as supplied by the vendor.
- A safe test environment with a clear view of the sky for initial GPS verification.
- Knowledge of the device identifier expected by Plaspy or the registration process used by your fleet account.
- A stable place to mount or install the device for final testing after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the TT-1 sends its location and event messages to the Plaspy server endpoint and port so the platform can process and present data in dashboards and reports. You point the device at the shared Plaspy host and port and let the platform detect the incoming protocol.

- The TT-1 transmits position messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport may be set to UDP or TCP depending on the device configuration interface.
- Plaspy automatically detects the tracker protocol and associates messages with the correct device.
- Event reports such as geo-fencing alerts, emergency alarms, battery status, and mileage are forwarded to Plaspy when enabled on the device.
- Regular tracking modes (time interval, distance interval, smart mode) send periodic updates to the configured Plaspy endpoint so asset visibility is maintained.

## Common Configuration Workflow

1. Access the official WP manufacturer configuration method or software for the TT-1 (SMS commands, configuration tool, or the vendor GUI as provided).
2. Enter the Plaspy server host by setting d.plaspy.com or the server IP 54.85.159.138 in the device server/host field.
3. Set the server port to 8888 (all Plaspy devices use the same port).
4. Choose UDP or TCP transport if the TT-1 requires an explicit transport selection.
5. Apply or save the configuration in the device interface and follow any device prompts to confirm settings.
6. Restart or power cycle the device if required by the TT-1 workflow to activate the new server settings.
7. Validate that the device reports to Plaspy by checking incoming messages in the platform and confirming position and event updates.

## Example Configuration Commands

The WP TT-1 can be configured using the manufacturer supplied tools or command set. Exact commands vary by firmware and the configuration method chosen (SMS, USB, or software utility). Because manufacturer command sets are not provided here, follow the official WP TT-1 configuration guide for the precise command syntax required to set the server to d.plaspy.com or 54.85.159.138 and port 8888, and to select UDP or TCP. Remember that Plaspy will automatically detect the protocol when messages are received.

## Configuration Notes

- Firmware differences between TT-1 units can change command syntax and available options; always check the TT-1 release notes before applying bulk changes.
- If the device supports both UDP and TCP, test both transports during acceptance testing to confirm stable delivery to Plaspy.
- Confirm the SIM data plan supports the tracker message volume and that roaming settings are correct for cross-border deployments.
- Save a copy of the original device configuration before applying Plaspy settings so you can revert if necessary.
- Use an open sky test to verify GPS reception and that location updates arrive at d.plaspy.com on port 8888.

## Why Use Plaspy with This Configuration

Configuring the WP TT-1 to report to Plaspy provides a practical way to centralize trailer and asset tracking data into a single platform for monitoring, alerts, and reporting. The TT-1's multiple tracking modes and event reporting pair well with Plaspy's automatic protocol detection and shared server endpoint to simplify integration and reduce per-device configuration overhead.

Learn more about Plaspy and platform features at https://www.plaspy.com. Manufacturer configuration methods and firmware behavior can change over time, so verify the latest device specific setup details on the WP site http://www.wondeproud.com/ before performing large scale deployments.
