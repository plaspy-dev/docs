---
slug: /gotop/g25/configuration
id: g25-configuration
sidebar_label: Configuration
title: GOTOP - G25 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for using the GOTOP G25 asset tracker with Plaspy including required server settings and practical setup steps
keywords:
  - GOTOP G25 configuration
  - GOTOP G25 setup
  - GOTOP G25 server configuration
  - GOTOP G25 Plaspy
  - GOTOP G25 GPS tracker
  - asset tracker configuration
  - vehicle tracking setup
  - fleet tracking GOTOP
  - G25 tracking platform
  - GOTOP tracker setup guide
---

# GOTOP - G25 Configuration

This page documents the public configuration context for using the GOTOP G25 with the Plaspy platform. It explains the server settings Plaspy expects and describes the practical steps and checks installers and integrators commonly perform so the G25 can report to Plaspy for asset tracking and monitoring.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at its server endpoint. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this guide for practical configuration context and refer to the device manufacturer for the most current device instructions.

## Configuration Overview

The goal of this configuration process is to prepare a GOTOP G25 to send location and status data to Plaspy so assets become visible in your monitoring platform. The public Plaspy endpoint and port values are used by almost all supported devices and the platform identifies the tracker protocol automatically.

- Configure the G25 to report to Plaspy using the shared server endpoint and port.
- Ensure the device has a working power source and mobile connectivity before testing.
- Choose the transport method the device requires and set it to the Plaspy values.
- Save or apply changes and, if required, restart the device so the new server settings take effect.
- Validate connectivity by confirming the device appears in Plaspy after configuration.

## Plaspy Server Settings

Use the following public server settings when configuring the GOTOP G25 for Plaspy:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP may be used depending on device settings
- Plaspy automatically detects the tracker protocol at its endpoint and uses the same port for all supported devices

These values are the public, shared server settings Plaspy expects for inbound tracker connections.

## Typical Requirements Before Setup

- Device powered and battery sufficiently charged for configuration and testing
- Active data SIM installed and registered on a supported mobile network for 4G LTE 3G or 2G service
- Access to the GOTOP configuration method required by your unit, such as SMS commands or the vendor configuration tool
- Device identifier available such as IMEI or serial number for registration and troubleshooting
- Access to Plaspy account or support contact to confirm the device is visible after setup
- Ability to receive device response messages or logs to verify settings were applied

## How This Tracker Connects to Plaspy

When configured for Plaspy the G25 will send its position and status updates to Plaspy's shared server endpoint and port. Plaspy receives the device traffic and automatically determines the protocol so the same port can be used for many different tracker models.

- The tracker is set to report to the Plaspy server at d.plaspy.com or its IP 54.85.159.138
- Data is sent over port 8888 which Plaspy uses for all device connections
- Transport can be UDP or TCP depending on how the G25 is configured
- Plaspy automatically detects the tracker protocol and processes the incoming messages
- Once reporting correctly, the device will be visible in Plaspy for real time location and event monitoring

## Common Configuration Workflow

1. Access the official GOTOP configuration method recommended for your G25 firmware and hardware (for example SMS parameter commands or the GOTOP configuration app).
2. Enter d.plaspy.com as the server domain or use the server IP 54.85.159.138 if the device requires an IP address.
3. Set the device server port to 8888 as Plaspy uses this port for all supported devices.
4. Choose the transport type UDP or TCP if the device requires an explicit selection.
5. Apply or save the configuration to the tracker using the manufacturer's process.
6. Restart the device if required by the manufacturer or after applying settings to ensure changes take effect.
7. Validate that the G25 reports to Plaspy by checking for device activity in the Plaspy platform or by confirming server-side reception with Plaspy support.

## Example Configuration Commands

The GOTOP G25 supports SMS parameter settings and query functions, but the exact commands and syntax can vary by firmware and vendor tool. Because model specific command sets differ, follow the official GOTOP documentation or the configuration tool supplied by your vendor for the precise SMS or software commands to set server, port, and transport.

When using SMS-based configuration, you will typically set the server domain or IP and the port. For example, device SMS syntax often includes placeholders similar to {{apn}} for the APN value. Keep placeholders intact if copying examples from manufacturer documentation and replace them with your carrier or account specific values.

## Configuration Notes

- Firmware and hardware revisions can change available commands and exact parameter names; always confirm the command set for your device firmware version.
- The G25 supports SMS configuration and vendor tools; choose the method that matches your deployment and installer tools.
- Plaspy uses the same port 8888 across devices and performs automatic protocol detection so you do not need to change ports per model.
- When a device requires a transport selection, test both UDP and TCP if the first option does not immediately connect, then verify in Plaspy.
- Keep a record of the device identifier and any command responses during setup to simplify troubleshooting with GOTOP or Plaspy support.

## Why Use Plaspy with This Configuration

Using the GOTOP G25 with Plaspy provides a practical way to gain visibility and operational oversight for assets that need long standby time and rugged installation. With the G25's support for mobile networks and SMS configuration, it can be integrated into fleet and asset monitoring workflows that use Plaspy's shared server endpoint to centralize device reporting.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration and firmware details on the manufacturer site https://www.gotop.cc/. Manufacturer specifications, setup methods, and device behavior may change over time so always confirm current instructions with the official GOTOP documentation.
