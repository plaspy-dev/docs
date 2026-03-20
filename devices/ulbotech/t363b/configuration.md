---
slug: /ulbotech/t363b/configuration
id: t363b-configuration
sidebar_label: Configuration
title: Ulbotech - T363B Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for Ulbotech T363B showing Plaspy server settings and practical setup steps
keywords:
 - Ulbotech T363B configuration
 - Ulbotech T363B setup
 - T363B Plaspy configuration
 - Plaspy tracker configuration
 - OBD GPS tracker setup
 - vehicle tracker configuration
 - GPS tracker Plaspy
 - fleet tracker setup
 - T363B server configuration
 - Ulbotech GPS platform setup
---

# Ulbotech - T363B Configuration

This page documents the public configuration context for using the Ulbotech T363B with Plaspy. It focuses on the practical server settings and workflow needed to point a T363B device at the Plaspy backend so the tracker can stream location and vehicle telemetry for visualization, alerts, and reporting in Plaspy.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol, but the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. Use this guide as the practical Plaspy-facing reference and consult Ulbotech documentation for device specific procedures and the latest firmware notes.

## Configuration Overview

The objective of configuration is to prepare the T363B so it reliably communicates with Plaspy and appears in the Plaspy platform for live tracking and reporting. Configuration covers pointing the device to the Plaspy server, selecting the correct transport, and validating network and telemetry flow.

- Set the tracker to report to the Plaspy server endpoint and port so location and OBD/CAN telemetry flow into Plaspy.
- Choose the transport mode (UDP or TCP) if required by the device interface and firmware.
- Confirm the device has a working SIM with data capability and that APN settings are correct or set to auto detect.
- Apply and save manufacturer-side settings, then restart the device if required to begin reporting.
- Verify connectivity and visibility in Plaspy to confirm position, telemetry, and event reporting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP; the device may be configured using either transport on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Physical access to the vehicle OBD-II port for plug and play installation or to the device for USB configuration
- A valid SIM card with an active data plan and GPRS connectivity for the T363B
- Access to the official Ulbotech configuration method or software such as the vendor web tool, USB debug interface, or approved configuration app
- A Plaspy account or onboarding details to validate device visibility after setup
- Stable mobile network coverage at the installation site for initial registration and FOTA if required
- Basic diagnostic tools or logs (LED indicators, micro USB console, or manufacturer logs) to confirm connectivity

## How This Tracker Connects to Plaspy

When the T363B is configured, it streams GPS position and OBD/CAN telemetry to the Plaspy backend over GPRS. The device reports to the shared Plaspy server endpoint and port so data from many device models is handled consistently and presented in Plaspy dashboards.

- The T363B sends periodic position updates and event flags to d.plaspy.com on port 8888
- Telemetry from the OBD and CAN bus is forwarded to Plaspy for mapping to vehicle attributes and analytics
- Alerts and driver behavior events reported by the device are ingested into Plaspy for notifications and rules
- Plaspy uses automatic protocol detection so the platform interprets the device protocol without per device protocol selection
- Using the same port across devices simplifies firewall and network rules for integration

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or software for the T363B (micro USB tool, vendor web tool, or documented SMS commands).
2. In the device server settings enter the Plaspy endpoint by hostname or IP: d.plaspy.com or 54.85.159.138.
3. Set the device port to 8888 as the reporting port used by all devices in Plaspy.
4. Choose UDP or TCP if the device requires a transport selection and save the transport choice.
5. Apply or save the configuration in the manufacturer tool and push changes to the device.
6. Restart the device if required by the vendor instructions to initiate the new server connection.
7. Validate that the device reports to Plaspy by checking device online status, a first GPS fix, or telemetry reception in your Plaspy account.

## Example Configuration Commands

The exact configuration commands and methods for the T363B depend on Ulbotech firmware and the vendor tools used for setup. Manufacturer tools may expose options via micro USB, a web portal, or SMS command sets. Because no public command set is included here, please consult Ulbotech configuration guides or ask your vendor for the specific commands or configuration file format required to set the server to d.plaspy.com or 54.85.159.138 on port 8888 and to select UDP or TCP.

If your vendor provides SMS commands or a command line list, use those tools to set:
- Server hostname or IP to d.plaspy.com or 54.85.159.138
- Port to 8888
- Transport to UDP or TCP if needed
Always preserve any placeholders your vendor provides and follow the exact order required by the device firmware.

## Configuration Notes

- Firmware and hardware revisions can change configuration interfaces and supported command syntax; verify firmware release notes before large deployments.
- TCP and UDP both work to reach Plaspy on port 8888; choose the transport that best matches your network and device behavior. Plaspy will detect the protocol automatically on receipt.
- The T363B supports auto APN recognition but some deployments require explicit APN, username, or password configuration from the carrier.
- Use the device LED indicators or the USB debug console to confirm GPRS registration and successful connection to d.plaspy.com or 54.85.159.138.
- If you rely on SMS-based setup methods, confirm that the SIM card supports SMS and data at the time of initial provisioning.

## Why Use Plaspy with This Configuration

Configuring the Ulbotech T363B to report to Plaspy gives organizations real time visibility into vehicle location, OBD and CAN telemetry, and driver events. The plug and play OBD form factor, combined with telemetry and immobilizer support, makes the T363B well suited for fleet operations, rental services, insurance telematics, and vehicle security programs that need consolidated dashboards, alerts, and reporting.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For device specific setup steps, firmware notes, and manufacturer instructions verify the latest technical documentation at http://www.ulbotech.com/ as manufacturer specifications and setup methods can change over time.
