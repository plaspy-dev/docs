---
slug: /riti/sls_00886/configuration
id: sls_00886-configuration
sidebar_label: Configuration
title: Riti - SLS-00886 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Riti SLS-00886 tracker to Plaspy servers using shared settings
keywords:
  - Riti SLS 00886 configuration
  - Riti SLS 00886 setup
  - Riti GPS tracker configuration
  - SLS 00886 server configuration
  - Plaspy tracker setup
  - GPS platform configuration
  - vehicle tracking setup
  - GPRS tracker configuration
  - SMS GPRS tracker setup
  - fleet management tracker
---

# Riti - SLS-00886 Configuration

This page provides the public configuration context for using the Riti SLS-00886 GPS vehicle tracker with the Plaspy platform. It summarizes the practical server settings and workflow required to point the tracker to Plaspy for live reporting and platform visibility while keeping the guidance general and vendor neutral.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tool used to configure the tracker. Use this page to prepare the device and confirm the Plaspy connection, and consult the official Riti documentation for detailed device commands and tools.

## Configuration Overview

Configuring the SLS-00886 for Plaspy focuses on preparing the tracker to send its location and status to the Plaspy shared endpoint, validating connectivity over the mobile network, and confirming that the device appears in the Plaspy platform. The process is primarily about setting the correct server endpoint, port, transport, and ensuring the device has valid network access.

- Set the tracker to report to the Plaspy server endpoint so GPRS location updates reach the platform
- Ensure the SIM and mobile data are active so the device can open a session to Plaspy
- Select the transport mode required by the device firmware and confirm Plaspy transport compatibility
- Save and apply settings on the device and perform a connection validation so the device is visible in Plaspy
- Verify SMS reporting as a fallback if the device is configured to send alerts via SMS

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

These values are the public shared settings Plaspy uses for all supported trackers. The SLS-00886 can be configured to use either UDP or TCP on port 8888 to reach the Plaspy endpoint.

## Typical Requirements Before Setup

- A powered and functional Riti SLS-00886 tracker installed or on a bench for initial setup
- An active SIM card with mobile data enabled and sufficient coverage for GPRS reporting
- Access to the official Riti configuration method or software and any relevant SMS command list from the manufacturer
- The device IMEI or serial number available for platform registration and troubleshooting
- Basic knowledge of whether the tracker firmware requires choosing UDP or TCP as the transport
- Ability to restart the device after applying configuration changes

## How This Tracker Connects to Plaspy

The SLS-00886 sends location coordinates and status updates to a back end over the GPRS network and can also send SMS alerts to user numbers. When integrated with Plaspy the tracker is pointed at the shared Plaspy server endpoint and port so the platform receives and parses the incoming data for live monitoring.

- Configure the device to report GPRS data to d.plaspy.com or 54.85.159.138
- Use port 8888 for all data reporting to Plaspy
- Choose UDP or TCP per the device firmware or installer preference
- Plaspy automatically detects the tracker protocol to interpret incoming messages
- Confirm device reporting in the Plaspy platform after applying settings

## Common Configuration Workflow

1. Access the official Riti configuration method or software provided by the manufacturer or vendor, or prepare to use the Riti SMS command set if supported
2. Enter the Plaspy server address using d.plaspy.com or the server IP 54.85.159.138 in the tracker server setting
3. Set the port to 8888 as the destination port for the tracker
4. Choose UDP or TCP if the device requires a transport selection during configuration
5. Apply or save the configuration to the device using the manufacturer tool or SMS confirmation
6. Restart the tracker if the device requires a reboot to apply network settings
7. Validate that the device successfully reports to Plaspy by checking for incoming data in the Plaspy platform or using any verification commands provided by Riti

## Example Configuration Commands

The SLS-00886 supports configuration via the manufacturer tools and SMS/GPRS commands, but exact command syntax and order can vary by firmware and regional firmware builds. Because manufacturer command sets can change, there are no universal commands included here. Refer to the official Riti configuration guide or the SMS command list supplied with the device for the exact strings to set server, port, transport, and APN settings.

If you have the Riti command list, follow its order for server and APN configuration, for example using the supplied tool or SMS command flow, then verify reporting to d.plaspy.com on port 8888. Contact your device vendor or Riti for the most current command syntax.

## Configuration Notes

- Firmware differences across production batches can change menu names or SMS command syntax; always check the device firmware version before applying instructions
- TCP versus UDP choice can affect delivery characteristics; test both if you encounter connectivity or parsing issues
- If the device uses an APN for GPRS, set the APN according to your mobile operator using the official Riti configuration tool or SMS commands
- SMS can be used as a configuration or alert fallback when GPRS connectivity is unreliable
- Keep the device IMEI and configuration record handy for platform registration and troubleshooting

## Why Use Plaspy with This Configuration

Using the Riti SLS-00886 with Plaspy provides a straightforward way to bring GPRS location reporting into a single fleet platform. With the shared Plaspy endpoint and automatic protocol detection, once the SLS-00886 is pointed at the Plaspy server it can deliver position updates and events for visibility, route monitoring, and operational oversight.

To learn more about Plaspy visit https://www.plaspy.com and to verify the latest device specific setup instructions, firmware behavior, and manufacturer details consult Riti at https://www.riti.com.tw/ for the most current documentation.
