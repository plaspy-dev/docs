---
slug: /cantrack/vsl100/configuration
id: vsl100-configuration
sidebar_label: Configuration
title: CanTrack - VSL100 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configuring the CanTrack VSL100 GPS tracker for use with Plaspy including server settings and practical setup steps
keywords:
  - CanTrack VSL100 configuration
  - VSL100 setup for Plaspy
  - CanTrack GPS tracker configuration
  - VSL100 server configuration
  - VSL100 tracking software configuration
  - CanTrack installation guide
  - VSL100 fleet management setup
  - VSL100 GPRS configuration
  - GPS speed limiter configuration
  - Plaspy device integration
---

# CanTrack - VSL100 Configuration

This page covers the public configuration context for using the CanTrack VSL100 with Plaspy. It consolidates the practical server settings and workflow information you need to point a VSL100 device at Plaspy so the unit can send location, speed governance events, tamper alerts, and other telemetry into the platform for centralized monitoring and reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but the exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide to understand the required Plaspy values and the general workflow, and consult CanTrack documentation for device-specific commands and the latest firmware behavior.

## Configuration Overview

The goal of configuration is to prepare the VSL100 to communicate reliably with Plaspy so fleet operators receive continuous location and event telemetry. Configuration typically covers the server endpoint, transport selection, and any carrier APN or SIM settings required for GPRS connectivity.

- Point the VSL100 to the Plaspy server endpoint using either the domain name or IP address provided by Plaspy.
- Configure the device to use port 8888 which Plaspy uses for all supported devices.
- Select UDP or TCP transport on the device if the manufacturer requires a transport choice.
- Apply and save settings via the CanTrack PC tool, over GPRS, or by SMS depending on the installed device and your workflow.
- Validate connectivity by ensuring the device appears and reports in the Plaspy platform.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the VSL100:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all devices

Supply either the domain d.plaspy.com or the IP 54.85.159.138 in the device configuration and set port 8888. If the device firmware requires choosing UDP or TCP, select the preferred transport and save the change. Plaspy will detect the tracker protocol automatically once the device connects.

## Typical Requirements Before Setup

- Physical power to the VSL100 and confirmation of a healthy backup battery if installed
- Active SIM card with data enabled and a correct APN configured if using GPRS connectivity
- External GSM and GNSS antennas connected where required by the installation
- Access to CanTrack configuration tools or methods such as the PC configuration utility, SMS setup, or remote GPRS configuration
- Access to your Plaspy account and fleet administration tools to verify device visibility after setup
- Basic knowledge of the device serial number or identifier used to link records in Plaspy

## How This Tracker Connects to Plaspy

When configured, the VSL100 sends location, speed-governor events, tamper and anti-jammer alerts, and other telemetry to Plaspy over its GPRS link. Plaspy ingests these messages at the shared server endpoint and port and presents them in the platform for monitoring and reporting.

- The device reports periodically and on events to the shared Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888
- Transport may use UDP or TCP depending on the device setting; Plaspy will automatically detect the protocol
- Speed limit violations, tamper alerts, and anti-jammer alarms are transmitted as events and recorded in Plaspy
- Historical data can be retained on the device and uploaded or downloaded per CanTrack methods while real time telemetry feeds the Plaspy dashboards
- Successful configuration makes the VSL100 visible in Plaspy for live tracking and audit reporting

## Common Configuration Workflow

1. Access the official CanTrack configuration method for the VSL100 such as the PC configuration tool, remote GPRS configuration, or SMS commands.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server/host field.
3. Set the device port to 8888, noting that Plaspy uses this same port for all supported devices.
4. Choose UDP or TCP transport if the VSL100 firmware requires a transport selection.
5. Apply or save the configuration through the chosen manufacturer tool or method.
6. Restart the device if the manufacturer tool or firmware documentation specifies a restart after applying settings.
7. Validate that the device reports to Plaspy by checking the device status and recent events in your Plaspy account.

## Example Configuration Commands

The VSL100 supports configuration via PC tool, GPRS and SMS. Exact command formats and sequences differ between firmware releases and CanTrack configuration utilities. Because manufacturer commands and SMS syntaxes are provided and maintained by CanTrack, consult the official CanTrack configuration manual or the PC configuration utility for the exact commands and parameters to set server host, server IP, port and transport. The general actions you will perform are:

- Set server host to d.plaspy.com or 54.85.159.138
- Set server port to 8888
- Select UDP or TCP transport if required
- Save and restart the device if needed

If you prefer device-level command examples and SMS syntax, refer to the CanTrack VSL100 configuration guide from the manufacturer for the precise strings and any available verification commands.

## Configuration Notes

- Firmware differences may change the exact menu names, SMS command syntax, or PC tool behaviors; always check the device firmware version before applying steps.
- Choose UDP or TCP based on your network conditions and any specific instructions in the CanTrack manual; Plaspy will auto-detect the protocol on its side.
- Verify the mobile operator APN settings and that the SIM has GPRS data enabled when using cellular connectivity.
- For installations relying on SMS for configuration, ensure the controlling phone number and any SMS passwords are known and secured.
- Retain device identifiers such as IMEI so you can correlate the physical unit with the record in Plaspy after configuration.

## Why Use Plaspy with This Configuration

Configuring the VSL100 to report to Plaspy centralizes location, speed governance events, tamper alerts, and anti-jammer notifications into one fleet management interface. This integration helps operators monitor compliance, respond to incidents quickly, and maintain auditable records of overspeed violations and security events.

To learn more about Plaspy and how it integrates with compatible devices visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and installation instructions verify current details at the CanTrack website https://www.cantrackgps.com/.
