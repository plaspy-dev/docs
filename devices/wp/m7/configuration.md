---
slug: /wp/m7/configuration
id: m7-configuration
sidebar_label: Configuration
title: WP - M7 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for WP M7 GPS tracker with Plaspy shared server settings and practical configuration steps for vehicle tracking
keywords:
  - WP M7 configuration
  - WP M7 setup
  - WP M7 Plaspy
  - Plaspy device configuration
  - M7 GPS tracker setup
  - vehicle tracking M7
  - WP tracker configuration
  - M7 server configuration
  - GPS tracker Plaspy setup
  - WP M7 guide
---

# WP - M7 Configuration

This page covers the public configuration context for using the WP M7 portable GPS tracker with Plaspy. It explains the shared server settings Plaspy expects, the typical preparation steps, and practical advice for pointing the M7 at the Plaspy endpoint so it can report location and status data to the platform. The guidance here uses only public information and focuses on what is required to get the M7 visible in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol during connection. Exact manufacturer-side setup steps and menu names can vary by firmware, hardware revision, installation type, and vendor configuration tools, so use this page together with your WP M7 documentation and configuration tool.

## Configuration Overview

The goal of the configuration process is to prepare the M7 to communicate reliably with Plaspy using the shared Plaspy server endpoint and port, validate that the device can reach the server over the chosen transport, and confirm that the tracker appears and reports correctly in the Plaspy platform.

- Point the M7 to the Plaspy server endpoint so its GPRS/UDP/TCP reports are delivered to Plaspy.
- Choose the transport (UDP or TCP) supported by the tracker and network, and set the shared port used by Plaspy.
- Configure any required carrier settings such as APN so the M7 has data connectivity for GPRS reporting.
- Save and apply settings, restart the tracker if required, and verify the device is reporting to Plaspy.
- Use Plaspy to confirm device visibility and basic telemetry after the first reports arrive.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the WP M7 to report to Plaspy:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device connects.

## Typical Requirements Before Setup

- A charged WP M7 with a functioning backup battery and magnetic mounting ready for installation.
- A valid SIM card with a data plan and GPRS enabled if you plan to use GPRS reporting.
- Access to the WP manufacturer configuration method or software (SMS commands, configuration app, or PC tool) used to set server and transport parameters.
- Knowledge of the device IMEI or identifier as required by your fleet records and the Plaspy platform.
- Confirmation of the mobile network APN and credentials from the SIM provider if APN configuration is required.
- A location with good GPS visibility for initial position fixes during testing.

## How This Tracker Connects to Plaspy

The WP M7 can send position and status reports to Plaspy by pointing its reporting endpoint to the shared Plaspy server and using the platform port. Plaspy collects incoming device messages and maps them to device records so you can view live location and alerts in the platform.

- Configure the M7 to report to d.plaspy.com or 54.85.159.138.
- Set the reporting port to 8888 so the device traffic arrives on the Plaspy listening port.
- Choose UDP or TCP as the transport if the device requires a specific selection.
- The tracker can use GPRS for packet data reporting; SMS is available as an alternative reporting channel where supported by the device.
- Plaspy automatically detects the tracker protocol when the device sends data to the shared server endpoint.

## Common Configuration Workflow

1. Access the official WP manufacturer configuration method or software (SMS command set, PC configuration tool, or vendor app).
2. Enter the Plaspy server address by using either d.plaspy.com or the server IP 54.85.159.138 in the server/host field.
3. Set the device reporting port to 8888 to match Plaspy's listening port.
4. If required by the device, choose the transport protocol UDP or TCP according to network and device preferences.
5. Configure carrier APN and any credentials if GPRS reporting is used, and ensure the SIM is active.
6. Apply or save the configuration and restart the device if the manufacturer tool recommends a reboot.
7. Validate that the device reports to Plaspy by checking for the first location or status message in the Plaspy platform.

## Example Configuration Commands

The WP M7 supports configuration through manufacturer tools and SMS command sets; exact commands and syntax vary by firmware and tool. Because manufacturer command sets change and different firmware revisions use different command formats, consult the WP M7 documentation or your vendor tool for the precise commands to set the server host, server IP, port, and transport.

When using a configuration tool or SMS setup, the public values you will enter are typically:
- server host: d.plaspy.com (or 54.85.159.138)
- port: 8888
- transport: UDP or TCP

If you are working with SMS-based configuration, follow the WP M7 command syntax from the official manual to set the server and port. If you have a PC or mobile configuration utility, use that utility to enter the same host and port values and save them to the device.

## Configuration Notes

- WP M7 firmware revisions and vendor configuration utilities can change command names and menu structure; always check the current manual for exact syntax.
- Choose UDP or TCP based on network reliability and your organization preferences; UDP is typically used for low-overhead reporting while TCP offers session reliability when supported.
- SMS can be used as a fallback for some settings or reporting modes if GPRS is unavailable, but SMS-based workflows depend on the device SMS command support.
- Remember that Plaspy uses the same port 8888 for all devices and will automatically detect the tracker protocol when the device connects to d.plaspy.com or 54.85.159.138.
- Validate the device after configuration by observing the first reports in Plaspy and confirming correct IMEI mapping.

## Why Use Plaspy with This Configuration

Using the WP M7 with Plaspy provides a straightforward way to bring the M7's compact, long-life tracking capability into a centralized fleet or asset visibility platform. By pointing the M7 to Plaspy's shared server endpoint and port, organizations can receive real-time reports and basic status alerts through the Plaspy platform for operational visibility and monitoring.

To learn more about Plaspy and supported integrations, visit https://www.plaspy.com. Device-specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions and command references on the WP manufacturer site at http://www.wondeproud.com/ before applying changes.
